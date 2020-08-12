import express from 'express'
import {
  getAllCourses,
  updateCourse,
  createCourse,
  getAllCourseInAClass,
  deleteCourse } from '../controllers/courses'

const router = express.Router()

router.post('/class/:classId/course', createCourse)
router.patch('/course/:courseId', updateCourse)
router.get('/courses', getAllCourses)
router.get('/class/:classId/course', getAllCourseInAClass)
router.delete('/course/:courseId', deleteCourse)


module.exports.coursesRouter = router