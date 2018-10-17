const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trabajoSchema = new Schema({
    name:String,
    text: String,
    imageURL: String,
    comments:[{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = mongoose.model("Anuncio", trabajoSchema);
