const mongoose = require('mongoose');
const ActivitiesSchema = mongoose.Schema({
    customerId: { type: String, required: true },
    action: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Activities', ActivitiesSchema);
