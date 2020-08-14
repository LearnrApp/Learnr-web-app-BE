import express from 'express'
import {
  getAllCourses,
  updateCourse,
  createCourse,
  getAllCourseInAClass,
  getOneCourse,
  deleteCourse
} from '../controllers/courses'

const router = express.Router()

router.post('/class/:classId/course', createCourse)
router.patch('/course/:courseId', updateCourse)
router.get('/courses', getAllCourses)
router.get('/class/:classId/course', getAllCourseInAClass)
router.get('/course/:courseId', getOneCourse)
router.delete('/course/:courseId', deleteCourse)


module.exports.coursesRouter = router