const express = require('express');
const router = express.Router();
const rssService = require('../services/rssService');

/**
 * @route   GET /api/rss/fetch
 * @desc    Manually fetch new videos from YouTube channels
 * @access  Public
 */
router.get('/fetch', async (req, res) => {
  try {
    const results = await rssService.fetchAndProcessAllFeeds();
    res.json({
      success: true,
      data: results
    });
  } catch (error) {
    console.error('Error in RSS fetch route:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * @route   POST /api/rss/webhook
 * @desc    Webhook for automatic updates (internal use)
 * @access  Private
 */
router.post('/webhook', async (req, res) => {
  try {
    // This would typically be triggered by a scheduled job
    // For security, you might want to add authentication here
    const results = await rssService.fetchAndProcessAllFeeds();
    res.json({
      success: true,
      data: results
    });
  } catch (error) {
    console.error('Error in RSS webhook route:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
