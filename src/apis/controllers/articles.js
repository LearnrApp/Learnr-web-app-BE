import articles from '../../models/articles'
import { errorResMsg, successResMsg } from '../../utils/response'
import courses from '../../models/courses'
import classes from '../../models/classes'

const createArticle = async (req, res) => {
  try {
    const { topic, content, video } = req.body
    // const { content } = req.body

    const courseName = await courses.findById(req.params.courseId)
    const className = await classes.findById(req.params.classId)

    if(!courseName) {
      return errorResMsg(res, 404, 'Invalid Course Provided')
    }
    if(!className) {
      return errorResMsg(res, 404, 'Invalid Class Provided')
    }
    const article = await articles.create({
      topic,
      content,
      video,
      class: req.params.classId,
      course: req.params.courseId
    })
    await courses.findByIdAndUpdate(req.params.courseId, {$push: {articles: article._id}}, {new: true})
    const data = {
      'message': 'Course created successfully',
      article
    }
    return successResMsg(res, 201, data) 
  } catch (error) {
    return errorResMsg(res, 500, 'Internal server error, contact your service administrator')
  }
}

const getAllArticles = async (req, res) => {
  const allArticles = await articles.find({})
  // .populate(
  //   'courses',
  //   '-_id',
  // );
  return successResMsg(res, 200, allArticles)
}

const getAllArticlesInACourse = async (req, res) => {
  const allArticlesInCourse = await articles.find({ course: req.params.courseId })
  .populate(
    'course',
    '_id courseTitle courseImage'
  )
  return successResMsg(res, 200, allArticlesInCourse)
}

const getAnArticle = async (req, res) => {
  const getArticle = await articles.findById(req.params.articleId)
  return successResMsg(res, 200, getArticle)
  
}

const updateArticle = async (req, res) => {
  try {
    const bodyToBeUpdated = {
      topic: req.body.topic,
      content: req.body.content
    }
    const articleUpdated = await articles.findByIdAndUpdate(req.params.articleId, bodyToBeUpdated, {
      new: true,
      runValidators: true
    })
    const data = {
      'message': 'Course updated successfully',
      articleUpdated
    }
    return successResMsg(res, 201, data)
  } catch (error) {
    return errorResMsg(res, 500, 'Internal server error, contact your service administrator')
  }
}

const deleteArticle = async (req, res) => {
  try {
    await articles.findByIdAndDelete(req.params.articleId)
    const data = {
      'message': 'Article deleted successfully'
    }
    return successResMsg(res, 202, data)
  } catch (error) {
    return errorResMsg(res, 500, 'Internal server error, contact your service administrator')
  }
}

module.exports = {
  createArticle,
  getAllArticles,
  getAllArticlesInACourse,
  getAnArticle,
  updateArticle,
  deleteArticle
}