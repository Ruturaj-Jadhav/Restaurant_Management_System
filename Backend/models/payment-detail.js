const mongoose = require('mongoose')

const paymentDetailsSchema = new mongoose.Schema({
	restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
	orderId: {
		type: String,
		required: true
	},
	receiptId: {
		type: String
	},
	paymentId: {
		type: String,
	},
	signature: {
		type: String,
	},
	amount: {
		type: Number
	},
	currency: {
		type: String
	},
	createdAt: {
		type: Date
	},
	status: {
		type: String
	}
})

module.exports = mongoose.model('PaymentDetail', paymentDetailsSchema)