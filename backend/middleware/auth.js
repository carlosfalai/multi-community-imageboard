const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * Protect routes - middleware to verify JWT token and attach user to request
 */
exports.protect = async (req, res, next) => {
  let token;

  // Check if token exists in Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1];
  }

  // Check if token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Not authorized to access this route'
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request
    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    console.error('Error in auth middleware:', error);
    return res.status(401).json({
      success: false,
      error: 'Not authorized to access this route'
    });
  }
};

/**
 * Check if user is an adult - middleware for age-restricted content
 */
exports.checkAdult = async (req, res, next) => {
  if (!req.user.isAdult) {
    return res.status(403).json({
      success: false,
      error: 'You must be 18 or older to access this content'
    });
  }

  next();
};
