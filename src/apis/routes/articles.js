import express from 'express'
import {
  createArticle,
  getAllArticles,
  getAllArticlesInACourse,
  updateArticle,
  getAnArticle,
  deleteArticle,
} from '../controllers/articles'

const router = express.Router()

router.post('/class/:courseId/article', createArticle)
router.get('/articles', getAllArticles,)
router.get('/class/:courseId/article', getAllArticlesInACourse)
router.get('/article/:articleId', getAnArticle)
router.patch('/article/:articleId', updateArticle)
router.delete('/article/:articleId', deleteArticle)
module.exports.articlesRouter = router