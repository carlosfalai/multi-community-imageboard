# Multi-Community Imageboard Website

A website that links multiple imageboards with RSS integration for YouTube channels.

## Features

- Multiple imageboard communities including:
  - InfoWars (Alex Jones) with "times that AJ was right" thread category
  - THENX (Chris Heria) with workout content
  - Sam Shamoun's work on Christianity and Islam
  - Tristan and Andrew Tate clips
  - Fresh and Fit community videos
  - Siddhanath Yoga Parampara teachings
  - 4chan /pol/ with content filtering

- Key functionality:
  - RSS integration with YouTube channels for automatic post creation
  - Anonymous posting by default
  - Image posting capability
  - Upvote/downvote system
  - Emoji reactions
  - Sharing functionality
  - Optional membership with anonymity toggle per community
  - Age verification for adult content

## Tech Stack

- Frontend: React.js
- Backend: Node.js/Express
- Database: MongoDB
- Authentication: JWT

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   cd frontend && npm install
   cd ../backend && npm install
   ```
3. Create a `.env` file in the backend directory (see `.env.example` for required variables)
4. Start the backend server:
   ```
   cd backend && npm start
   ```
5. Start the frontend development server:
   ```
   cd frontend && npm start
   ```

## Development

The project is structured as follows:
- `/frontend`: React.js frontend application
- `/backend`: Node.js/Express backend API
- `/docs`: Project documentation

## License

MIT
