const express = require('express');
const login = require('./login');
const register = require('./register');
const logout = require('./logout');
const router = express.Router();
// const login = require('./login');

// router.post('/register',register);
// router.post('/login',login);
// router.get('/logout',logout);

module.exports = router;