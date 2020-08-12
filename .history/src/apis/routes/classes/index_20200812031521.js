import express from 'express'
import { createClass } from '../../contollers/classes'

const router = express.Router()

router.post(
  '/',
  createClass
)

module.exports.classRouter = router