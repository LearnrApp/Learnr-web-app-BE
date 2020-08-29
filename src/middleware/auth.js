// import jwt from 'jsonwebtoken'
// import asyncHandler from 'express-sync-handler'
// const jwt = require('jsonwebtoken');

// const asyncHandler = require('express-async-handler');
// const ErrorResponse = require('../utils/error-handler');
// const User = require('../models/user');

// // Protect routes
// exports.protect = asyncHandler(async (req, res, next) => {
//     let token;

//     if (
//         req.headers.authorization &&
//         req.headers.authorization.startsWith('Bearer')
//     ) {
//         // Set token from Bearer token in header
//         token = req.headers.authorization.split(' ')[1];
//         // Set token from cookie
//     }

//     // Make sure token exists
//     if (!token) {
//         return next(new ErrorResponse('Not authorized to access this route', 401));
//     }

//     try {
//         // Verify token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         req.user = await User.findById(decoded.id);

//         next();
//     } catch (err) {
//         return next(new ErrorResponse('Not authorized to access this route', 401));
//     }
// });

// // Grant access to specific roles
// exports.authorize = (...roles) => {
//     return (req, res, next) => {
//         if (
//             !(
//                 roles.includes(req.user.role) ||
//                 (req.user.isAdmin && roles.includes('admin'))
//             )
//         ) {
//             return next(
//                 new ErrorResponse(
//                     `User role ${req.user.role} is not authorized to access this route`,
//                     403
//                 )
//             );
//         }
//         next();
//     };
// };

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import students from "../models/students";

dotenv.config();

export const studentAuth = async (req, res, next) => {
    try {
        const studentToken = req.header("Authorization").split(" ")[1];

        const decoded = jwt.verify(studentToken, process.env.JWT_SECRET);

        const student = await students.findById(decoded.id).select({ password: 0 });

        if (!student) {
            throw new Error(); // Fires the code inside the catch block....
        }

        req.students = student;

        next();
    } catch (err) {
        res.json({ msg: "Not Authorized" });
    }
};
