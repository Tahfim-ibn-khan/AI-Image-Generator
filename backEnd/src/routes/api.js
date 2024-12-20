const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { register, login } = require('../controllers/authController');
const { body } = require('express-validator');
const router = express.Router();

// Normal Login & Registration
router.post('/register', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], register);

router.post('/login', login);

// Google Login
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
}));

router.get('/auth/google/callback',
    passport.authenticate('google', { session: false }),
    (req, res) => {
        const token = jwt.sign(
            { id: req.user.id, email: req.user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.json({ token, message: 'Google login successful' });
    }
);

module.exports = router;
