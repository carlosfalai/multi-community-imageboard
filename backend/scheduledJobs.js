const cron = require('node-cron');
const rssService = require('./services/rssService');

/**
 * Setup scheduled jobs for RSS feed fetching
 */
const setupScheduledJobs = () => {
  // Schedule RSS feed fetching every hour
  cron.schedule('0 * * * *', async () => {
    console.log('Running scheduled RSS feed fetch job at:', new Date().toISOString());
    try {
      const results = await rssService.fetchAndProcessAllFeeds();
      console.log('RSS feed fetch job completed with results:', results);
    } catch (error) {
      console.error('Error in scheduled RSS feed fetch job:', error);
    }
  });

  console.log('Scheduled jobs have been set up');
};

module.exports = setupScheduledJobs;
