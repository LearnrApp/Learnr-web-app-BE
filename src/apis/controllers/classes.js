import classes from '../../models/classes'
import { errorResMsg, successResMsg } from '../../utils/response'

const createClass = async (req, res) => {
  try {
    const { className } = req.body;
    // const classCreated = await classes.create({
    //   className,
    //   // courses: req.params.courseId,
    //   // students:
    // })
    const newClass = await new classes({
      className
    })
    const savedClass = await newClass.save()
    const data = {
      'message': 'Class created successfully',
      savedClass
    };
    return successResMsg(res, 201, data)
  } catch (error) {
    return errorResMsg(res, 500, 'Internal server error, contact your service administrator')
  }
  return null
}

const getAllClasses = async (req, res) => {
  const allClasses = await classes.find({})
  .populate(
    'students',
    '-_id -password -class',
  )
  return successResMsg(res, 200, allClasses)
}

const updateClass = async (req, res) => {
  try {
    const bodyToBeUpdated = {
      className: req.body.className
    }
    const classUpdated = await classes.findByIdAndUpdate(req.params.classId, bodyToBeUpdated, {
      new: true,
      runValidators: true
    })
    const data = {
      'message': 'Class updated successfully',
      classUpdated
    }
    return successResMsg(res, 201, data)
  } catch (error) {
    return errorResMsg(res, 500, 'Internal server error, contact your service administrator')
  }
}

const deleteClass = async (req, res) => {
  try {
    await classes.findByIdAndDelete(req.params.classId)
    const data = {
      'message': 'Class deleted successfully'
    }
    return successResMsg(res, 202, data)
  } catch (error) {
    return errorResMsg(res, 500, 'Internal server error, contact your service administrator')
  }
}

module.exports = {
  createClass,
  getAllClasses,
  updateClass,
  deleteClass
}