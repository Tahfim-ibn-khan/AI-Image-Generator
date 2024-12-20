const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: { type: String, unique: true },
    name: { type: String, required: false },
    email: { type: String, unique: true },
    password: { type: String, required: false }, // Required for normal login only
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
