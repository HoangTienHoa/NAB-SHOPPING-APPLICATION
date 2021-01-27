const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
    branch: { type: String, required: true },
    color: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Products', ProductSchema);
