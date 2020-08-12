import express from 'express'
import { createClass, getAllClasses } from '../contollers/classes'

const router = express.Router()

router.post('/class',
  createClass
)
router.get('/class', getAllClasses)

module.exports.classRouter = router