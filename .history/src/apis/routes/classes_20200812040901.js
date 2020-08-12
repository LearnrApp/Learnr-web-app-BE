import express from 'express'
import { createClass, getAllClasses } from '../contollers/classes'

const router = express.Router()

router.post('/class/create',
  createClass
)

module.exports.classRouter = router