import mongoose, {Schema} from 'mongoose'

const classSchema = new Schema({
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'courses'
    }
  ],
  name: {
    type: String,
    enum: ['Js1', 'Js2', 'Js3', 'Ss1', 'Ss2', 'Ss3', 'General'],
    required: true
  }
})