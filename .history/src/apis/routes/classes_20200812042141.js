import express from 'express'
import { createClass, getAllClasses, updateClass } from '../contollers/classes'

const router = express.Router()

router.post('/class',
  createClass
)
router.get('/class', getAllClasses)
router.patch('/class/:classId', updateClass)

module.exports.classRouter = router