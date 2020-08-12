import mongoose, { Schema } from 'mongoose'

const articleSchema = new Schema({
  articleTitle: {
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
})

export default mongoose.model ('articles', articleSchema)