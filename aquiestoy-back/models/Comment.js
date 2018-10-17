const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  desc: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  anuncio: {
    type: Schema.Types.ObjectId,
    ref: 'Anuncio'
  }
}, {
    timestamps: {
      updatedAt: "update_at",
      createdAt: "created_at"
    }
  })

module.exports = mongoose.model('Comment', commentSchema)