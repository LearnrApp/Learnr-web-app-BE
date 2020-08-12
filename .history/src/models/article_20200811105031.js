import mongoose, { Schema } from 'mongoose'

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String
  }
})

export default mongoose.model ('articles', articleSchema)