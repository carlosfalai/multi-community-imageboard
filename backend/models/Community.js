const mongoose = require('mongoose');

const CommunitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  slug: {
    type: String,
    required: [true, 'Please add a slug'],
    unique: true,
    trim: true,
    lowercase: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  youtubeChannel: {
    type: String,
    required: [true, 'Please add a YouTube channel ID']
  },
  youtubeRSSUrl: {
    type: String,
    required: [true, 'Please add a YouTube RSS URL']
  },
  backgroundImage: {
    type: String,
    required: [true, 'Please add a background image URL']
  },
  categories: [
    {
      name: {
        type: String,
        required: [true, 'Please add a category name']
      },
      slug: {
        type: String,
        required: [true, 'Please add a category slug'],
        lowercase: true
      }
    }
  ],
  adultOnly: {
    type: Boolean,
    default: false
  },
  contentFilters: {
    blockNSFW: {
      type: Boolean,
      default: false
    },
    blockLGBT: {
      type: Boolean,
      default: false
    },
    blockDegenerate: {
      type: Boolean,
      default: false
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Community', CommunitySchema);
