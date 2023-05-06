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
    status : {
        type : 'String',
        default : 'Pending'
    },
    table_no : {
        type : 'Number'
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
   // restaurantId: { type: Schema.Types.ObjectId, ref: 'user.model', required: true }

})

const orderDetail = mongoose.model('orderDetail', orderDetailSchema);

module.exports = orderDetail;