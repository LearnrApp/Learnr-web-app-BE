import mongoose, { Schema } from 'mongoose'

const classSchema = new Schema({
  className: {
    type: String,
    unique: true
  },
},
{
  timestamps: true
})

export default mongoose.model('classes', classSchema)