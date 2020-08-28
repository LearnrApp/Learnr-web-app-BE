import express from "express";
import students from '../controllers/students'
import classes from "../../models/classes";
import { auth } from "../../middleware/auth";

const router = express.Router()

router.post(`/students/register/:classId`, students.createStudent)
router.post("/students/login", students.studentLogin)
router.get("/students/profile", auth, students.studentProfile)
router.patch('/students/profile/update', auth, students.updateStudentProfile)

export { router as studentRoutes }