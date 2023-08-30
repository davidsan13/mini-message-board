const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: {type:String, required: true},
  user: {type: String, required: true},
  added: {type: Date}
})

MessageSchema.virtual("url").get(function() {
  return `/catalog/author/${this.id}`
})

module.exports = mongoose.model("Message", MessageSchema)