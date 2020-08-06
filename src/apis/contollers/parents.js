import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

import Parent from '../../models/parents'
dotenv.config()

export default {
  createParent: async (req, res, next) => {
    try {
      const findParent = await Parent.findOne({username: req.body.username})

      if (findParent) {
        return res.json({
          status: 'error: user-exists',
          msg: `Username already exists. Try another username`
        })
      }
  
      const encryptPass = await bcrypt.hash(req.body.password, 12)
      
      const newParent = new Parent({
        email: req.body.email,
        username: req.body.username,
        password: encryptPass
      })

      const savedParent = await newParent.save()

      const token = jwt.sign(
        {
          userJwt: savedParent._id
        },
        process.env.JWT_SECRET
      )

      res.json({
        status: 'success',
        msg: 'Account created successfully',
        userToken: token,
        user: savedParent
      });
    } catch(err) {
      console.log(err)
      res.json({
        msg: err
      })
    }
  },

  parentLogin: async (req, res, next) => {
    try {
      // const getEmail = await Parent.findOne({email: req.body.email})
      const username = await Parent.findOne({username: req.body.username})
      // const getParent = getEmail || username
      if (!username) {
        return res.json({
          status: 'error: wrong-username',
          msg: 'Username or email not found!'
        })
      }

      const passwordMatch = await bcrypt.compare(
        req.body.password,
        username.password
      )
      if (!passwordMatch) {
        return res.json({
          status: 'error: wrong-details',
          msg: 'Incorrect login details'
        })
      }
      res.json({
        status: 'success',
        msg: 'Login successful'
      })
    } catch(err) {
      console.log(err)
      res.json({
        msg: err
      })
    }
  }

}