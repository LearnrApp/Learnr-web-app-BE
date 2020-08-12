import mongoose, {Schema} from 'mongoose'

const courseSchema = new Schema ({
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'students'
    },
  ],
  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'classes'
    }
  ],
  
})

export default mongoose.model('courses', courseSchema)