var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: { type: String, required: [true, 'Username is required.'] },
    password: { type: String, required: false }
});

module.exports = mongoose.model('User',userSchema);