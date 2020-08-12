import mongoose, {Schema} from 'mongoose'

const UserSchema = new Schema ({
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
    type: String,
    enum: ['Js1', 'Js2', 'Js3', 'Ss1', 'Ss2', 'Ss3']
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
      ref: 'Courses'
    },
  ],
  quizTaken: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Quiz'
    },
  ],
  achievements: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Achievements'
    },
  ],
  profileUpdated: {
    type: Boolean,
    default: false
  },
  profileUpdatedAt: [
    {
      type: Boolean,
      default: false
    },
    {
      timestamps: true
    }
  ]
},
{
  timestamps: true
})

export default mongoose.model('students', UserSchema)