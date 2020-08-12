import mongoose, {Schema} from 'mongoose'

const courseSchema = new Schema ({
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'students'
    }
  ],
})

export default mongoose.model('courses', courseSchema)