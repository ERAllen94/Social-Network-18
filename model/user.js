const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: 'userName is required!',
    trim: true,
  },
  email: {
type: String,
unique: true,
required: 'email is required',
match: [/.+@.+\..+/]
  },
  thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
  ],

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
]

  
  
});

const User = model('User', UserSchema);

module.exports = User;