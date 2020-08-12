import classes from '../../models/classes'
import { errorResMsg, successResMsg } from '../../utils/response'

const createClass = async (req, res) => {
  try {
    const { className } = req.body;
    const classCreated = await classes.create({
      className, 
    })
    const data = {
      'message': 'Class created successfully',
      classCreated
    };
    return successResMsg(res, 201, data)
  } catch (error) {
    return errorResMsg(res, 500, 'Internal server error, contact your service administrator')
  }
  return null
}

const getAllClasses = async (req, res) => {
  const allClasses = await classes.find({})
  return successResMsg(res, 200, allClasses)
}

module.exports = {
  createClass,
  getAllClasses,
}