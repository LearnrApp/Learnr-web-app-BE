import mongoose, {Schema} from 'mongoose'

const parentSchema = new Schema ({
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
  email: {
    type: String,
    unique: true,
    required: true  
  },
  password: {
    type: String,
    minlength: 8,
    required: true
  },
  phone: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['Female', 'Male', 'Prefer not to say',]
  },
  dateCreated: {
    type: Date,
    default: new Date()
  },
  profileUpdated: {
    type: Boolean,
    default: false
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Student'
    }
  ],
  profileUpdatedAt: [
    {
      type: Date,
      default: new Date()
    },
  ]
})

export default mongoose.model('parents', parentSchema)