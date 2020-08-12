import mongoose, {Schema} from 'mongoose'

const courseSchema = new Schema ({
  juniorClass: {
    type: String,
    enum: [
      'Mathematics',
      'English',
      'Basic Science',
      'Basic Technology',
      'Social Science',
      'Civic Education',
      'Introduction to Programming',
      'Digital Marketing for Beginners',
      'Phtography Fundamentals',
      'Graphic Design Basics',
      'Fashion Designing',
      'Event Management'
    ]
  },
  seniorClassScience: {
    type: String,
    enum: [
      'Mathematics',
      'English',
      'Economics',
      'Biology',
      'Chemistry',
      'Physics',
      'Introduction to Programming',
      'Digital Marketing for Beginners',
      'Phtography Fundamentals',
      'Graphic Design Basics',
      'Fashion Designing',
      'Event Management'
    ]
  },
  seniorClassArts: {
    type: String,
    enum: [
      'Mathematics',
      'English',
      'Economics',
      'Literature',
      'Government',
      'CRS',
      'Introduction to Programming',
      'Digital Marketing for Beginners',
      'Phtography Fundamentals',
      'Graphic Design Basics',
      'Fashion Designing',
      'Event Management'
    ]
  }
  
})

export default mongoose.model('courses', courseSchema)