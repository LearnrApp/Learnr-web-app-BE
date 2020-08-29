import express from "express";
import students from '../controllers/students'
import classes from "../../models/classes";
import { studentAuth } from "../../middleware/auth";

const router = express.Router()

router.post(`/students/register/:classId`, students.createStudent)
router.post("/students/login", students.studentLogin)
router.get("/students/profile", studentAuth, students.studentProfile)
router.patch('/students/profile/update', studentAuth, students.updateStudentProfile)
router.delete('/students/delete/:_id', students.deleteStudent)

export { router as studentRoutes }