import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

import students from '../../models/students'
dotenv.config()

export default {
  createStudent: async (req, res, next) => {
    try {
      const findStudent = await students.findOne({username: req.body.username})

      if (findStudent) {
        return res.json({
          status: 'error: user-exists',
          msg: `Username already exists. Try another username`
        })
      }
  
      const encryptPass = await bcrypt.hash(req.body.password, 12)
      
      const newStudent = new students({
        parentEmail: req.body.parentEmail,
        username: req.body.username,
        class: req.body.class,
        password: encryptPass
      })

      const savedStudent = await newStudent.save()

      const token = jwt.sign(
        {
          userJwt: savedStudent._id
        },
        process.env.JWT_SECRET
      )

      res.json({
        status: 'success',
        msg: 'Account created successfully',
        userToken: token,
        student: savedStudent
      });
    } catch(err) {
      console.log(err)
      res.json({
        msg: err
      })
    }
  },

  studentLogin: async (req, res, next) => {
    try {
      // const getEmail = await Parent.findOne({email: req.body.email})
      const username = await students.findOne({username: req.body.username})
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