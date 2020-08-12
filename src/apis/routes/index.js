import { studentRoutes } from './students'
import { parentRoutes } from './parents'
import { classRouter } from './classes' 

export default (app) => {
  app.use(studentRoutes)
  app.use(parentRoutes)
  app.use(classRouter)
};
