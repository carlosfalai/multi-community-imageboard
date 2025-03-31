const communityData = [
  {
    name: "InfoWars (Alex Jones)",
    slug: "infowars",
    shortDescription: "Times that AJ was right and more",
    description: "InfoWars imageboard featuring Alex Jones content with a special thread category for 'Times that AJ was right'",
    backgroundImage: "https://i.imgur.com/XYZ1234.jpg", // Placeholder - would be replaced with actual official photo
    youtubeChannel: "UCgZKiTLHPEEVqGbDo_ZPXpQ", // InfoWars channel ID
    youtubeRSSUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UCgZKiTLHPEEVqGbDo_ZPXpQ",
    hasNewContent: false,
    categories: [
      {
        name: "Times that AJ was right",
        slug: "aj-was-right"
      },
      {
        name: "General",
        slug: "general"
      }
    ]
  },
  {
    name: "THENX (Chris Heria)",
    slug: "thenx",
    shortDescription: "Workout routines and fitness content",
    description: "THENX imageboard featuring Chris Heria's workout routines and fitness content",
    backgroundImage: "https://i.imgur.com/ABC5678.jpg", // Placeholder - would be replaced with actual official photo
    youtubeChannel: "UCqjwF8rxRsotnojGl4gM0Zw", // THENX channel ID
    youtubeRSSUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UCqjwF8rxRsotnojGl4gM0Zw",
    hasNewContent: false,
    categories: [
      {
        name: "Workouts",
        slug: "workouts"
      },
      {
        name: "Tutorials",
        slug: "tutorials"
      }
    ]
  },
  {
    name: "Sam Shamoun",
    slug: "sam-shamoun",
    shortDescription: "Christianity and demystifying Islam",
    description: "Sam Shamoun's imageboard on Christianity and demystifying Islam and the works of Lord Jesus Christ",
    backgroundImage: "https://i.imgur.com/DEF9012.jpg", // Placeholder - would be replaced with actual official photo
    youtubeChannel: "UC9JU55HpvRvCSb1TO2w_eDA", // Sam Shamoun channel ID
    youtubeRSSUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UC9JU55HpvRvCSb1TO2w_eDA",
    hasNewContent: false,
    categories: [
      {
        name: "Christianity",
        slug: "christianity"
      },
      {
        name: "Islam",
        slug: "islam"
      }
    ]
  },
  {
    name: "Tristan & Andrew Tate",
    slug: "tate-brothers",
    shortDescription: "Clips and content from the Tate brothers",
    description: "Imageboard for Tristan and Andrew Tate clips and content",
    backgroundImage: "https://i.imgur.com/GHI3456.jpg", // Placeholder - would be replaced with actual official photo
    youtubeChannel: "UCnYMOamNKLGVlJgRUbamveA", // Placeholder channel ID
    youtubeRSSUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UCnYMOamNKLGVlJgRUbamveA",
    hasNewContent: false,
    categories: [
      {
        name: "Clips",
        slug: "clips"
      },
      {
        name: "Discussions",
        slug: "discussions"
      }
    ]
  },
  {
    name: "Fresh & Fit",
    slug: "fresh-and-fit",
    shortDescription: "Content from the Fresh & Fit podcast",
    description: "Fresh and Fit community imageboard featuring content from their official YouTube channel",
    backgroundImage: "https://i.imgur.com/JKL7890.jpg", // Placeholder - would be replaced with actual official photo
    youtubeChannel: "UC5sqmi33b7l9kIYa0yASOmQ", // Fresh & Fit channel ID
    youtubeRSSUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UC5sqmi33b7l9kIYa0yASOmQ",
    hasNewContent: false,
    categories: [
      {
        name: "Podcast",
        slug: "podcast"
      },
      {
        name: "Afterhours",
        slug: "afterhours"
      }
    ]
  },
  {
    name: "Siddhanath Yoga Parampara",
    slug: "siddhanath-yoga",
    shortDescription: "Yoga teachings and spiritual content",
    description: "Siddhanath Yoga Parampara community imageboard featuring yoga teachings and spiritual content",
    backgroundImage: "https://i.imgur.com/MNO1234.jpg", // Placeholder - would be replaced with actual official photo
    youtubeChannel: "UCmhHyt1Y4wSAbwu2SJdwQUQ", // Placeholder channel ID
    youtubeRSSUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UCmhHyt1Y4wSAbwu2SJdwQUQ",
    hasNewContent: false,
    categories: [
      {
        name: "Teachings",
        slug: "teachings"
      },
      {
        name: "Practices",
        slug: "practices"
      }
    ]
  },
  {
    name: "4chan /pol/",
    slug: "pol",
    shortDescription: "Filtered content from 4chan's /pol/ board",
    description: "Filtered content from 4chan's /pol/ board with NSFW, LGBT, and 'degenerate' content blocked",
    backgroundImage: "https://i.imgur.com/PQR5678.jpg", // Placeholder - would be replaced with actual official photo
    adultOnly: true,
    hasNewContent: true, // Example of new content notification
    contentFilters: {
      blockNSFW: true,
      blockLGBT: true,
      blockDegenerate: true
    },
    categories: [
      {
        name: "Imported Threads",
        slug: "imported"
      },
      {
        name: "Discussions",
        slug: "discussions"
      }
    ]
  }
];

export default communityData;
