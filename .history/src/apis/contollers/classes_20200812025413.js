import classes from '../../models/classes'
import { errorResMsg, successResMsg } from '../../utils/response'

const createClass = async (req, res) => {
  try {
    const { className } = req.body
    const class = await classes.create({
      className, 
    })
    const data = {
      'message': 'Class created successfully',
      class
    }
    return successResMsg(res, 201, data)
  } catch (error) {
    return errorResMsg(res, 500, 'Internal server error, contact your service administrator')
  }
}