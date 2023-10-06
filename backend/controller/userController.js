const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.json({message: 'Register User'})
    console.log('GET user executed !')
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async  (req, res) => {
    res.json({message: 'Login User'})
    console.log('User logged in !')
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Public
const getMe = asyncHandler(async  (req, res) => {
    res.json({message: 'User data displayed'})
    console.log('User data available')
})

module.exports = {
    registerUser,
    loginUser,
    getMe,
}