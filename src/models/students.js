import mongoose, { Schema } from 'mongoose'

const studentSchema = new Schema ({
  role: {
    type: String,
    enum: ['student']
  },
  fullName: {
    type: String
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  age: {
    type: String
  },
  phone: {
    type: String
  },
  parentEmail: {
    type: String,
  },
  password: {
    type: String,
    minlength: 8,
    required: true
  },
  photo: {
    type: String,
    default: 'https://res.cloudinary.com/iykeoyiih/image/upload/v1599162145/Learnr%20Images/Profile%20Images/profile-dp_eibwgh.svg'
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: 'classes'
  },
  classSelect: {
    type: String,
    enum: ['Js 1', 'Js 2', 'Js 3', 'Ss 1', 'Ss 2', 'Ss 3'],
    required: true
  },
  seniorStudent: {
    type: Boolean,
    default: false
  },
  gender: {
    type: String,
    enum: ['Female', 'Male', 'Prefer not to say',]
  },
  quizTaken: [
    {
      type: Schema.Types.ObjectId,
      ref: 'quiz'
    },
  ],
  achievements: [
    {
      type: Schema.Types.ObjectId,
      ref: 'achievements'
    },
  ],
  isActive: {
    type: Boolean,
    default: true
  }
},
{
  timestamps: true
})

export default mongoose.model('students', studentSchema)