import express from 'express'
import { createClass, getAllClasses, updateClass, deleteClass } from '../contollers/classes'

const router = express.Router()

router.post('/class',
  createClass
)
router.get('/class', getAllClasses)
router.patch('/class/:classId', updateClass)
router.delete('/class/:classId', deleteClass)

module.exports.classRouter = router