import mongoose, {Schema} from 'mongoose'

const studentSchema = new Schema ({
  student: {
    type: Boolean,
    default: true
  },
  parent: {
    type: Boolean,
    default: false
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
  parentEmail: {
    type: String,
    unique: true,
    default: ''
  },
  password: {
    type: String,
    minlength: 8,
    required: true
  },
  photo: {
    type: String
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: 'classes'
  },
  gender: {
    type: String,
    enum: ['Female', 'Male', 'Prefer not to say',]
  },
  // dateCreated: {
  //   type: Date,
  //   default: new Date()
  // },
  coursesTaken: [
    {
      type: Schema.Types.ObjectId,
      ref: 'courses'
    },
  ],
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
  profileUpdated: [
    {
      type: Boolean,
      default: false
    },
    {
      timestamps: true
    }
  ],
  // profileUpdatedAt: [
  //   {
  //     type: Boolean,
  //     default: false
  //   },
  //   {
  //     timestamps: true
  //   }
  // ]
},
{
  timestamps: true
})

export default mongoose.model('students', studentSchema)