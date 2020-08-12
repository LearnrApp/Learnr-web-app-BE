import mongoose, { Schema } from 'mongoose'

const articleSchema = new Schema({
  course: {
    type: Schema.Types.ObjectId,
    ref: 'courses'
  },
  topic: {
    type: String,
    unique: true
  },
  video: {
    type: String,
    unique: true
  },
  content: {
    type: String
  }
},
{
  timestamps: true
})

export default mongoose.model ('articles', articleSchema)