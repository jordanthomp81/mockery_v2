var mongoose = require('mongoose');
var templateSchema = new mongoose.Schema({
    type: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    primary_color: { type: String, required: true },
    secondary_color: { type: String, required: false },
    xpos: { type: Number, required: true },
    ypos: { type: Number, required: true }
});

module.exports = mongoose.model('Template',templateSchema);