import mongoose, { Schema } from 'mongoose'

const courseSchema = new Schema ({
  courseTitle: {
    type: String
  },
  articles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'articles'
    },
  ]
})

export default mongoose.model('courses', courseSchema)