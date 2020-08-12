import { studentRoutes } from './students'
import { parentRoutes } from './parents'

export default (app) => {
  app.use(studentRoutes)
  app.use(parentRoutes)
};
