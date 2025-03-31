# Website Architecture for Multiple Imageboards Platform

## Overview

This document outlines the architecture for a multi-community imageboard website that integrates content from various communities including InfoWars (Alex Jones), THENX (Chris Heria), Sam Shamoun, Tristan and Andrew Tate, Fresh and Fit, Siddhanath Yoga Parampara, and 4chan /pol/. The platform will feature a Google Images-like minimal design for the landing page, RSS integration with YouTube channels, anonymous posting, and user authentication with anonymity options.

## System Architecture

The website will follow a modern web application architecture with the following components:

### Frontend
- **Framework**: React.js for building a dynamic, single-page application
- **State Management**: Redux for managing application state
- **Styling**: CSS/SASS with a responsive design approach
- **UI Components**: Custom components with minimal design inspired by Google Images

### Backend
- **Server**: Node.js with Express.js framework
- **Database**: MongoDB for storing user data, posts, and community information
- **Authentication**: JWT (JSON Web Tokens) for secure user authentication
- **API**: RESTful API endpoints for frontend-backend communication

### External Integrations
- **YouTube RSS**: Integration with YouTube channels for automatic thread creation
- **4chan API**: Integration with 4chan's /pol/ board for importing threads

## Database Schema

### Users Collection
```
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  dateJoined: Date,
  isAdult: Boolean,
  preferences: {
    anonymitySettings: {
      infoWars: Boolean,
      thenx: Boolean,
      samShamoun: Boolean,
      tate: Boolean,
      freshAndFit: Boolean,
      siddhanathYoga: Boolean,
      pol: Boolean
    }
  }
}
```

### Communities Collection
```
{
  _id: ObjectId,
  name: String,
  slug: String,
  description: String,
  youtubeChannel: String,
  youtubeRSSUrl: String,
  backgroundImage: String,
  categories: [
    {
      name: String,
      slug: String
    }
  ],
  adultOnly: Boolean,
  contentFilters: {
    blockNSFW: Boolean,
    blockLGBT: Boolean,
    blockDegenerate: Boolean
  }
}
```

### Threads Collection
```
{
  _id: ObjectId,
  communityId: ObjectId,
  categoryId: ObjectId,
  title: String,
  content: String,
  imageUrl: String,
  videoUrl: String,
  youtubeVideoId: String,
  source: String (YouTube/4chan/User),
  sourceId: String,
  createdAt: Date,
  updatedAt: Date,
  userId: ObjectId (null if anonymous),
  isAnonymous: Boolean,
  upvotes: Number,
  downvotes: Number,
  reactions: {
    emoji1: Number,
    emoji2: Number,
    ...
  },
  hasNewPosts: Boolean,
  importedFrom4chan: Boolean
}
```

### Posts Collection
```
{
  _id: ObjectId,
  threadId: ObjectId,
  content: String,
  imageUrl: String,
  createdAt: Date,
  updatedAt: Date,
  userId: ObjectId (null if anonymous),
  isAnonymous: Boolean,
  upvotes: Number,
  downvotes: Number,
  reactions: {
    emoji1: Number,
    emoji2: Number,
    ...
  }
}
```

## Component Structure

### Landing Page
- Header with logo and navigation
- Grid layout of community sections with official photos as backgrounds
- Each community section links to its respective imageboard
- Minimal design with small visuals similar to Google Images

### Community Pages
- Header with community branding
- Thread listing with thumbnails
- Filtering options for categories
- New thread indicator (red circle with '(1)')

### Thread Pages
- Thread content (video/image + text)
- Anonymous posting form
- Posts listing with upvote/downvote buttons
- Emoji reaction buttons
- Sharing functionality

### User Authentication
- Registration form with age verification
- Login form
- User profile page
- Anonymity settings per community

## API Endpoints

### User Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/anonymity` - Update anonymity settings

### Communities
- `GET /api/communities` - Get all communities
- `GET /api/communities/:slug` - Get community by slug
- `GET /api/communities/:slug/categories` - Get categories for a community

### Threads
- `GET /api/threads` - Get all threads
- `GET /api/communities/:slug/threads` - Get threads for a community
- `GET /api/communities/:slug/categories/:categorySlug/threads` - Get threads for a category
- `POST /api/threads` - Create a new thread
- `GET /api/threads/:id` - Get thread by ID
- `PUT /api/threads/:id/vote` - Upvote or downvote a thread
- `PUT /api/threads/:id/react` - Add emoji reaction to a thread

### Posts
- `GET /api/threads/:threadId/posts` - Get posts for a thread
- `POST /api/threads/:threadId/posts` - Create a new post
- `PUT /api/posts/:id/vote` - Upvote or downvote a post
- `PUT /api/posts/:id/react` - Add emoji reaction to a post

### RSS Integration
- `GET /api/rss/fetch` - Manually fetch new videos from YouTube channels
- `POST /api/rss/webhook` - Webhook for automatic updates (internal use)

### 4chan Integration
- `GET /api/4chan/pol/threads` - Get threads from 4chan /pol/
- `POST /api/4chan/pol/import` - Import a thread from 4chan /pol/

## RSS Integration Architecture

The RSS integration will work as follows:

1. Store YouTube channel URLs for each community
2. Set up a scheduled job to fetch RSS feeds from YouTube channels
3. Parse the RSS feeds to extract new videos
4. For each new video, create a new thread in the corresponding community
5. Use the video thumbnail as the thread image
6. Include the video title and description in the thread content
7. Store the YouTube video ID for embedding the video in the thread page

## 4chan /pol/ Integration Architecture

The 4chan /pol/ integration will work as follows:

1. Set up a scheduled job to fetch threads from 4chan's /pol/ board
2. Apply content filtering to block NSFW, LGBT, or 'degenerate' content
3. Import filtered threads into the /pol/ community
4. Mark imported threads with a source indicator
5. Display a notification (red circle with '(1)') for new threads
6. Allow users to comment on imported threads
7. Require users to be members and above 18 to post in this community

## User Authentication and Anonymity

The user authentication system will work as follows:

1. Users can browse and post anonymously without registration
2. Users can register to create a membership
3. Registered users can toggle anonymity per community
4. Age verification will be required for accessing adult-only communities (e.g., /pol/)
5. User preferences, including anonymity settings, will be stored in the database
6. JWT will be used for secure authentication

## Deployment Architecture

The website will be deployed using the following architecture:

1. GitHub repository for version control
2. Netlify for hosting the frontend
3. Netlify Functions for serverless backend
4. MongoDB Atlas for cloud database
5. Netlify build hooks for continuous deployment

## Security Considerations

1. Input validation to prevent XSS attacks
2. CSRF protection
3. Rate limiting to prevent abuse
4. Content moderation for user-generated content
5. Secure storage of user credentials (hashed passwords)
6. HTTPS for secure communication
7. Age verification for adult content
