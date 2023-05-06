// Imports
var express = require('express');
const Razorpay = require('razorpay')
const PaymentDetail = require('../../models/payment-detail')
const {nanoid} = require("nanoid");
const orderDetail = require('../../models/order-details');
const localStorage = require('local-storage');
const paymentDetail = require('../../models/payment-detail');

// Create an instance of RazorPay

let razorPayInstance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID,
	key_secret: process.env.RAZORPAY_KEY_SECRET
})

// Create a new Order

exports.createOrder =  async function (req, res, next) {
	try {
		const params = {
			amount: req.body.amount,
			currency: "INR",
			receipt: nanoid(),
			payment_capture: "1"
		};
		const response = await razorPayInstance.orders.create(params);
		const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
		const paymentDetail = new PaymentDetail({
			orderId: response.id,
			receiptId: response.receipt,
			amount: response.amount,
			currency: response.currency,
			createdAt: response.created_at,
			status: response.status
		});
		await paymentDetail.save();
		res.render('pages/payment/checkout', {
			title: "Confirm Order",
			razorpayKeyId: razorpayKeyId,
			paymentDetail: paymentDetail
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Error creating order');
	}
};

// Verfiy payment

exports.verifyPayment =  async function (req, res, next) {
	body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
	let crypto = require("crypto");
	let expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
		.update(body.toString())
		.digest('hex');

	// Compare the signatures
	if (expectedSignature === req.body.razorpay_signature) {
		// if same, then find the previosuly stored record using orderId,
		// and update paymentId and signature, and set status to paid.

		const orderId = req.body.razorpay_order_id;
		await PaymentDetail.findOneAndUpdate({
				orderId: req.body.razorpay_order_id
			}, {
				paymentId: req.body.razorpay_payment_id,
				signature: req.body.razorpay_signature,
				status: "paid"
			}, {
				new: true
			},
			async function (err, doc) {
				// Throw er if failed to save
				if (err) {
					throw err
				}
                // Find the user details from DB with the help of the orderId
				const user = await paymentDetail.findOne({orderId}).lean();
                // Get the items stored in the cart from localStorage to store them in DB
				const itemsString = localStorage.get("cart");
                // Get the restaurantId from the restaurant data stored in localStorage to store it in DB
				const tableDetails = localStorage.get("restaurantData");
				const items = JSON.parse(itemsString);

				var reponse = await orderDetail.create({
					orderId: user.orderId,
					paymentId: user.paymentId,
					amount: user.amount / 100,
					menu: items,
					table_no : tableDetails.table,
					restaurantId : tableDetails.id
				})

				console.log("user order details updated", reponse);
                // Remove the cart and RestaurantData stored in localStorage as it is now stored in Database.
				localStorage.remove("cart");
				localStorage.remove("restaurantData");

				// Render payment success page, if saved successfully

				res.render('pages/payment/success', {
					title: "Payment verification successful",
					paymentDetail: doc
				})
			}
		);
	} else {

        // Render payment failure page, if not saved succeffully

		res.render('pages/payment/fail', {
			title: "Payment verification failed",
		})
	}
};




