#!/bin/bash

# Test script for the multi-community imageboard website

echo "Starting website testing..."

# Test backend API endpoints
echo "Testing backend API endpoints..."

# Test user registration
echo "Testing user registration..."
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"password123","isAdult":true}' \
  -o registration_response.json

# Test user login
echo "Testing user login..."
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}' \
  -o login_response.json

# Extract token from login response
TOKEN=$(grep -o '"token":"[^"]*' login_response.json | grep -o '[^"]*$')

# Test protected routes
echo "Testing protected routes..."
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer $TOKEN" \
  -o profile_response.json

# Test anonymity settings update
echo "Testing anonymity settings update..."
curl -X PUT http://localhost:5000/api/auth/anonymity \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"anonymitySettings":{"infoWars":true,"thenx":false,"samShamoun":true,"tate":false,"freshAndFit":true,"siddhanathYoga":false,"pol":true}}' \
  -o anonymity_response.json

# Test RSS feed fetching
echo "Testing RSS feed fetching..."
curl -X GET http://localhost:5000/api/rss/fetch \
  -o rss_response.json

echo "Backend API tests completed."

# Test frontend
echo "Testing frontend..."
echo "Note: Manual testing required for frontend components."
echo "Please verify the following manually:"
echo "1. Landing page loads correctly with all communities displayed"
echo "2. Each community page loads with proper styling and content"
echo "3. Registration and login forms work correctly"
echo "4. Profile page displays user information and anonymity toggles"
echo "5. Age verification works for /pol/ community"
echo "6. RSS integration creates threads from YouTube videos"

echo "Testing completed."
