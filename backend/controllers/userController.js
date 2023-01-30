const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

//@desc Register a new user
//@route /api/auth/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  //Validation
  //Send client error ex. 400 if any input field is not filled
  if (!username || !email || !password) {
    res.status(400)
    //instead of send a json object as message
    //error() middleware is used, it sends an html
    throw Error('Please include all fields ')
  }

  //Find if user already exists
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  })

  if (user) {
    //send 201:created successfully
    res.status(201).json({
      user,
      // token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

//@desc login a user
//@route /api/auth/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  //Check if user exists
  const user = await User.findOne({ email })
  //Check if email and password match
  if (user && (await bcrypt.compare(password, user.password))) {
    const { password, ...info } = user._doc
    res.status(200).json({
      ...info,
      token: generateToken(user._id, user.isAdmin),
    })
  } else {
    res.status(401)
    throw new Error('Invalid Credentials')
  }
})
//@desc Update current user
//@route /api/users/:id
//@access Private
const updateUser = asyncHandler(async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    //if password is being changed, it must be encrypted again
    if (req.body.password) {
      //Hash password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt)
      req.body.password = hashedPassword
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).send(updatedUser)
  } else {
    res.status(403)
    throw new Error('Not authorized')
  }
})

//@desc Delete current user
//@route /api/users/:id
//@access Private
const deleteUser = asyncHandler(async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json('Deleted Sucessfully')
  } else {
    res.status(403)
    throw new Error('Not authorized')
  }
})
//@desc Get all users
//@route /api/users
//@access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const query = req.query.new
  if (req.user.isAdmin) {
    const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()
    res.status(200).json(users)
  } else {
    res.status(403)
    throw new Error('Not authorized')
  }
})

//@desc Get a user
//@route /api//users/:id
//@access Private
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  const { password, ...info } = user._doc
  res.status(200).json(info)
})

//@desc Get User stats
//@route /api/users/stats
//@access Private
const getUserStats = asyncHandler(async (req, res) => {
  const today = new Date()
  const lastYear = today.setFullYear(today.setFullYear() - 1)

  const data = await User.aggregate([
    {
      $project: {
        month: { $month: '$createdAt' },
      },
    },
    {
      $group: {
        _id: '$month',
        total: { $sum: 1 },
      },
    },
  ])
  res.status(200).json(data)
})

//Generate token function
const generateToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, { expiresIn: '5d' })
}

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserStats,
}
