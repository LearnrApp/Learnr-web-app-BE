import { studentRoutes } from './students'
import { parentRoutes } from './parents'
import { classRouter } from './classes'
import { coursesRouter } from './courses'
import { articlesRouter } from './articles'

export default (app) => {
  app.use(studentRoutes)
  app.use(parentRoutes)
  app.use(classRouter)
  app.use(coursesRouter)
  app.use(articlesRouter)
};
