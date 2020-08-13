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
  // video: {
  //   type: String,
  //   unique: true
  // },
  content: {
    // type: String
    introSection: {
      introSubHead: String,
      introContent: String
    },
    sectionOne: {
      sectionOneSubHead: String,
      sectionOneContent: String
    },
    sectionTwo: {
      sectionTwoSubHead: String,
      sectionTwoContent: String
    },
    sectionThree: {
      sectionThreeSubHead: String,
      sectionThreeContent: String
    },
    sectionFour: {
      sectionFourSubHead: String,
      sectionFourContent: String
    },
    sectionFive: {
      sectionFiveSubHead: String,
      sectionFiveContent: String
    },
    sectionSix: {
      sectionSixSubHead: String,
      sectionSixContent: String
    },
  }
},
{
  timestamps: true
})

export default mongoose.model ('articles', articleSchema)