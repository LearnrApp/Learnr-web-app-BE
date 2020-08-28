import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import { errorResMsg, successResMsg } from '../../utils/response'
import students from '../../models/students'
import classes from '../../models/classes'
dotenv.config()

export default {
  createStudent: async (req, res, next) => {
    try {
      const findStudent = await students.findOne({username: req.body.username})

      const classData = await classes.findById(req.params.classId)

      if(!classData) {
        return errorResMsg(res, 404, 'Invalid Class Provided')
      }

      if (findStudent) {
        return res.json({
          status: 'error: user-exists',
          msg: `Username already exists. Try another username`
        })
      }
  
      const encryptPass = await bcrypt.hash(req.body.password, 12)
      
      const newStudent = new students({
        username: req.body.username,
        password: encryptPass,
        class: req.params.classId,
        classSelect: req.body.classSelect,
        role: 'student'
      })

      const savedStudent = await newStudent.save()
      await classes.findByIdAndUpdate(req.params.classId, {$push: {students: newStudent._id}}, {new: true})

      const token = jwt.sign(
        {
          id: savedStudent._id
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
      const token = jwt.sign(
        {
          id: username._id
        },
        process.env.JWT_SECRET
      )
      res.json({
        status: 'success',
        msg: 'Login successful',
        userToken: token
      })
    } catch(err) {
      console.log(err)
      res.json({
        msg: err
      })
    }
  },

  studentProfile: async (req, res, next) => {
    try {
      const student = await students.findById(req.students.id)
      res.json({
        status: 'success',
        student
      });
    } catch (e) {
      console.log(e)
      res.json({ msg: e });
    }
  },

  updateStudentProfile: async (req, res, next) => {
    try {
      const studentBody = {
        ...req.body,
      }
      const findStudent = await students.findById(req.students.id)

      if (!findStudent) {
        return errorResMsg(res, 404, 'User not found')
      }
      // const updateStudent = await students.findById()
      const updateStudent = await students.findByIdAndUpdate(findStudent, studentBody, { new: true })
      const data = {
        'message': 'Profile updated successfully',
        updateStudent
      }
      return successResMsg(res, 201, data)
    } catch (e) {
      res.json({ msg: e })
    }
  }

}