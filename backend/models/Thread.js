const mongoose = require('mongoose');

const ThreadSchema = new mongoose.Schema({
  communityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
    required: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community.categories',
    required: false
  },
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Please add content'],
    maxlength: [5000, 'Content cannot be more than 5000 characters']
  },
  imageUrl: {
    type: String,
    required: false
  },
  videoUrl: {
    type: String,
    required: false
  },
  youtubeVideoId: {
    type: String,
    required: false
  },
  source: {
    type: String,
    enum: ['YouTube', '4chan', 'User'],
    default: 'User'
  },
  sourceId: {
    type: String,
    required: false
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  isAnonymous: {
    type: Boolean,
    default: true
  },
  upvotes: {
    type: Number,
    default: 0
  },
  downvotes: {
    type: Number,
    default: 0
  },
  reactions: {
    type: Map,
    of: Number,
    default: {}
  },
  hasNewPosts: {
    type: Boolean,
    default: false
  },
  importedFrom4chan: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Thread', ThreadSchema);
