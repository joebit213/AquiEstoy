const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required:true
    },
    anuncio: [{
        type: Schema.Types.ObjectId,
        ref: 'Anuncio'
      }],
    bio: String,
    comments:[{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }],
    email: {
        type:String,
        required:true
    },
    photoURL: String,
},
{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})

userSchema.plugin(passportLocalMongoose, {usernameField:"email"})

module.exports = mongoose.model('User', userSchema)
