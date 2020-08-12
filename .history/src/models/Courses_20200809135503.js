import mongoose, {Schema} from 'mongoose'

const CourseSchema = new Schema ({
  name: {
    type: String
    
  }
})

export default mongoose.model('Courses', CourseSchema)