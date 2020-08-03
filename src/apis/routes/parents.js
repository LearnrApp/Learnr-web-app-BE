import express from "express";

import parents from '../contollers/parents'
// import { auth } from "../../config/middleware";

const router = express.Router()

router.post("/parents/register", parents.createParent)
router.post("/parents/login", parents.parentLogin);

export { router as parentRoutes }