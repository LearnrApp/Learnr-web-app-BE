import mongoose, { Schema } from 'mongoose'

const classSchema = new Schema({
  className: {
    type: String,
    unique: true
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'courses'
    },
  ]
},
{
  timestamps: true
})

export default mongoose.model('classes', classSchema)