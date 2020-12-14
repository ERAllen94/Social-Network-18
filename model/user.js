const { Schema, model } = require('mongoose');

const UserSchema = new Schema({

  username: {
    type: String,
    required: "user name is required",
    trim: true,
    unique: true
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