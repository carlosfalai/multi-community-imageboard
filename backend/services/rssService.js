const Parser = require('rss-parser');
const parser = new Parser();
const fetch = require('node-fetch');
const Thread = require('../models/Thread');
const Community = require('../models/Community');

/**
 * Service for handling RSS feed fetching and processing
 */
class RSSService {
  /**
   * Fetch RSS feed from YouTube channel
   * @param {string} channelId - YouTube channel ID
   * @returns {Promise<Array>} - Array of feed items
   */
  async fetchYouTubeRSS(channelId) {
    try {
      const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
      const feed = await parser.parseURL(feedUrl);
      return feed.items;
    } catch (error) {
      console.error(`Error fetching RSS feed for channel ${channelId}:`, error);
      throw error;
    }
  }

  /**
   * Process YouTube RSS feed items and create threads
   * @param {string} communityId - ID of the community
   * @param {Array} items - Array of RSS feed items
   * @returns {Promise<Array>} - Array of created threads
   */
  async processYouTubeItems(communityId, items) {
    try {
      const community = await Community.findById(communityId);
      if (!community) {
        throw new Error(`Community with ID ${communityId} not found`);
      }

      const createdThreads = [];

      for (const item of items) {
        // Check if thread with this YouTube video ID already exists
        const videoId = this.extractYouTubeVideoId(item.link);
        const existingThread = await Thread.findOne({ youtubeVideoId: videoId });

        if (!existingThread) {
          // Create new thread
          const thread = new Thread({
            communityId,
            title: item.title,
            content: item.contentSnippet || item.content,
            imageUrl: this.getThumbnailUrl(videoId),
            videoUrl: item.link,
            youtubeVideoId: videoId,
            source: 'YouTube',
            sourceId: item.id,
            createdAt: new Date(item.pubDate),
            isAnonymous: true,
            upvotes: 0,
            downvotes: 0,
            reactions: {},
            hasNewPosts: true
          });

          const savedThread = await thread.save();
          createdThreads.push(savedThread);
        }
      }

      return createdThreads;
    } catch (error) {
      console.error(`Error processing YouTube items for community ${communityId}:`, error);
      throw error;
    }
  }

  /**
   * Extract YouTube video ID from URL
   * @param {string} url - YouTube video URL
   * @returns {string} - YouTube video ID
   */
  extractYouTubeVideoId(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  }

  /**
   * Get thumbnail URL for YouTube video
   * @param {string} videoId - YouTube video ID
   * @returns {string} - Thumbnail URL
   */
  getThumbnailUrl(videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }

  /**
   * Fetch and process RSS feeds for all communities
   * @returns {Promise<Object>} - Object with results for each community
   */
  async fetchAndProcessAllFeeds() {
    try {
      const communities = await Community.find({ youtubeChannel: { $exists: true, $ne: '' } });
      const results = {};

      for (const community of communities) {
        try {
          const items = await this.fetchYouTubeRSS(community.youtubeChannel);
          const threads = await this.processYouTubeItems(community._id, items);
          results[community.slug] = {
            success: true,
            threadsCreated: threads.length
          };
        } catch (error) {
          results[community.slug] = {
            success: false,
            error: error.message
          };
        }
      }

      return results;
    } catch (error) {
      console.error('Error fetching and processing all feeds:', error);
      throw error;
    }
  }
}

module.exports = new RSSService();
