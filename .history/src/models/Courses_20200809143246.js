import mongoose, {Schema} from 'mongoose'

const courseSchema = new Schema ({
  course: [
    {
      name: 'Mathematics'
    },
    {
      name: 'English'
    },
    {
      name: 'Civic Education'
    },
  ]
})

export default mongoose.model('courses', courseSchema)