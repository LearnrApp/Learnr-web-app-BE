import courses from '../../models/courses'
import { errorResMsg, successResMsg } from '../../utils/response'
import classes from '../../models/classes';

const createCourse = async (req, res) => {
  try {
    const { courseTitle } = req.body;
    
    const classData = await classes.findById(req.params.classId)
    
    if (!classData) {
      return errorResMsg(res, 404, 'Invalid Class Provided')
    }
    const course = await courses.create({
      courseTitle,
      class: req.params.classId
    })
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
      courseTitle: req.body.courseTitle
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
  return successResMsg(res, 200, allCoursesInClass)
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
  deleteCourse,
}