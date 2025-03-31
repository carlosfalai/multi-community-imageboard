## Testing Documentation

This document outlines the testing procedures for the multi-community imageboard website.

### Backend API Testing

The following API endpoints have been tested:

1. **User Registration** (`POST /api/auth/register`)
   - Creates a new user account with username, email, password, and age verification
   - Returns a JWT token upon successful registration

2. **User Login** (`POST /api/auth/login`)
   - Authenticates a user with email and password
   - Returns a JWT token upon successful login

3. **User Profile** (`GET /api/auth/me`)
   - Protected route that requires authentication
   - Returns the current user's profile information

4. **Anonymity Settings** (`PUT /api/auth/anonymity`)
   - Protected route that requires authentication
   - Updates the user's anonymity preferences for each community

5. **RSS Feed Fetching** (`GET /api/rss/fetch`)
   - Fetches the latest videos from YouTube channels
   - Creates threads automatically based on the fetched content

### Frontend Testing

The following frontend components have been manually tested:

1. **Landing Page**
   - Displays all communities with their official photos as backgrounds
   - Provides navigation to each community
   - Has a Google Images-like minimal design with small visuals

2. **Community Pages**
   - Each community page loads with proper styling and content
   - Displays threads specific to that community
   - Shows categories for each community (e.g., "times that AJ was right" for InfoWars)

3. **Authentication**
   - Registration form works correctly with all required fields
   - Login form authenticates users properly
   - Logout functionality works as expected

4. **Profile Page**
   - Displays user information correctly
   - Shows anonymity toggles for each community
   - Allows users to update their anonymity preferences

5. **Age Verification**
   - Age verification modal appears for the 4chan /pol/ community
   - Only allows access to users who verify they are 18+
   - Remembers verification status for returning users

6. **RSS Integration**
   - Creates threads automatically from YouTube videos
   - Displays video thumbnails and content correctly
   - Updates on schedule (every hour)

### Testing Results

All backend API endpoints are functioning as expected. The frontend components have been manually verified and are working correctly. The website meets all the requirements specified in the project brief.

### Future Testing Recommendations

1. Implement automated frontend testing with tools like Jest and React Testing Library
2. Add end-to-end testing with Cypress or Playwright
3. Implement load testing to ensure the website can handle multiple concurrent users
4. Add continuous integration testing with GitHub Actions
