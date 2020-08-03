import express from "express";

import students from '../contollers/students'
// import { auth } from "../../config/middleware";

const router = express.Router()

router.post("/students/register", students.createStudent)
router.post("/students/login", students.studentLogin)
// router.get("/user/me", auth, users.userProfile);

export { router as studentRoutes }