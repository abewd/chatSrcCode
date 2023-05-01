const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const chatSchema = new Schema({
  chatText: {
    type: String,
    required: 'Make a chat!',
    minlength: 1,
    trim: true,
  },
  users: Array,
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
});

const Chat = model('Chat', chatSchema);

module.exports = Chat;