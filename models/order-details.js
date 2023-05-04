const mongoose = require('mongoose')

const orderDetailSchema = new mongoose.Schema({
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false},
    orderId : {
        type : 'string',
        required : true
    },
    paymentId : {
        type :'string',
        required : true
    },
    amount : {
        type : 'number',
        required : true
    },
    menu : [
        {
            dish :{
                type : String
            },
            price : {
                type : Number
            }
        }
    ]
})

const orderDetail = mongoose.model('orderDetail', orderDetailSchema);

module.exports = orderDetail;