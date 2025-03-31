# Netlify Deployment Instructions

Since the automated Netlify deployment requires browser interaction which isn't possible in this environment, please follow these steps to complete the deployment:

## Prerequisites
- You already have a Netlify account (as indicated by your provided token)
- The code has been successfully pushed to GitHub at: https://github.com/carlosfalai/multi-community-imageboard

## Deployment Steps

1. **Log in to Netlify**
   - Go to https://app.netlify.com/ and log in to your account

2. **Create a new site from Git**
   - Click on "Add new site" > "Import an existing project"
   - Select GitHub as the Git provider
   - Authorize Netlify to access your GitHub repositories if prompted
   - Select the "multi-community-imageboard" repository

3. **Configure build settings**
   - The repository already includes a `netlify.toml` file with the correct configuration
   - Build command: `npm run build`
   - Publish directory: `build`
   - Base directory: `frontend`

4. **Configure environment variables**
   - Add the following environment variable:
     - Key: `REACT_APP_API_URL`
     - Value: The URL of your backend API (you may need to deploy the backend separately)

5. **Deploy the site**
   - Click "Deploy site"
   - Netlify will build and deploy your site
   - Once complete, you'll receive a unique URL for your deployed site

6. **Set up a custom domain (optional)**
   - In your site settings, you can configure a custom domain if desired

## Backend Deployment

For the backend API to work properly:

1. **Deploy the backend separately**
   - You can use services like Heroku, Render, or Railway to deploy the Node.js backend
   - Make sure to set up the required environment variables as specified in `.env.example`

2. **Update the frontend configuration**
   - After deploying the backend, update the `REACT_APP_API_URL` environment variable in your Netlify site settings to point to your backend URL

## Continuous Deployment

The site is set up for continuous deployment:
- Any changes pushed to the GitHub repository will automatically trigger a new build and deployment on Netlify
