const mongoose = require('mongoose');
const OrderSchema = mongoose.Schema({
    customerId: { type: String, required: true },
    productId: { type: Number, required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['Spending', 'Fulfill', 'Processcing', 'Resolved'], default: 'Processcing', required: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Orders', OrderSchema);
