const { Schema, model } = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./reaction')

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'userName is required!',
    minlength: 1,
    maxlength: 280
  },
  createAt: {
    type: Date,
    default: Date.now,
    get: (date) => moment(date).format("MMM Do YY")
  },
  username: {
    type: String,
    required: 'userName is required!'
  },

  reactions: [reactionSchema]
  ,
});



const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;