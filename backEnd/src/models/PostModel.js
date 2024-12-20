const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    prompt: { type: String, required: true },
    imageUrl: { type: String, required: true },
    likes: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
