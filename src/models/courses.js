import mongoose, { Schema } from 'mongoose'

const courseSchema = new Schema ({
  courseTitle: {
    type: String
  },
  courseImage: {
    type: String
  },
  courseSize: {
    type: String
  },
  articles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'articles'
    },
  ],
  class: {
    type: Schema.Types.ObjectId,
    ref: 'classes'
  }
})

export default mongoose.model('courses', courseSchema)