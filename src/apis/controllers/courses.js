import courses from '../../models/courses'
import { errorResMsg, successResMsg } from '../../utils/response'
import classes from '../../models/classes';

const createCourse = async (req, res) => {
  try {
    const { courseTitle } = req.body;
    const { courseImage } = req.body;
    const { courseSize } = req.body;
    
    const classData = await classes.findById(req.params.classId)
    
    if (!classData) {
      return errorResMsg(res, 404, 'Invalid Class Provided')
    }
    const course = await courses.create({
      courseTitle,
      courseImage,
      courseSize,
      class: req.params.classId,
      articles: req.params.articleId
    })
    await classes.findByIdAndUpdate(req.params.classId, {$push: {courses: course._id}}, {new: true})
    const data = {
      'message': 'Course created successfully',
      course
    };
    return successResMsg(res, 201, data)
  } catch (error) {
    return errorResMsg(res, 500, 'Internal server error, contact your service administrator')
  }
}

const updateCourse = async (req, res) => {
  try {
    const bodyToBeUpdated = {
      ...req.body
    }
    const courseUpdated = await courses.findByIdAndUpdate(req.params.courseId, bodyToBeUpdated, {
      new: true,
      runValidators: true
    })
    const data = {
      'message': 'Course updated successfully',
      courseUpdated
    }
    return successResMsg(res, 201, data)
  } catch (error) {
    return errorResMsg(res, 500, 'Internal server error, contact your service administrator')
  }
}

const getAllCourses = async (req, res) => {
  const allCourses = await courses.find({})
  .populate(
    'class',
    '-_id',
  );
  return successResMsg(res, 200, allCourses)
}

const getAllCourseInAClass = async (req, res) => {
  const allCoursesInClass = await courses.find({ class: req.params.classId })
  .populate(
    'class',
    '-_id'
  )
  .populate(
    'articles',
    '-_id -__v'
  )
  return successResMsg(res, 200, allCoursesInClass)
}

const getOneCourse = async (req, res) => {
  const oneCourse = await courses.findById(req.params.courseId)
  return successResMsg(res, 200, oneCourse)
}

const deleteCourse = async (req, res) => {
  try {
    await courses.findByIdAndDelete(req.params.courseId)
    const data = {
      'message': 'Course deleted successfully'
    }
    return successResMsg(res, 202, data)
  } catch (error) {
    return errorResMsg(res, 500, 'Internal server error, contact your service administrator')
  }
}

module.exports = {
  createCourse,
  updateCourse,
  getAllCourses,
  getAllCourseInAClass,
  getOneCourse,
  deleteCourse,
}