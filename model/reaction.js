const { Schema } = require('mongoose');

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
type: String,
required: 'body is required',
maxlength: 280
  },
  userName: { 
      
        type: Sting,
        required: 'username is required!'
  },
createdAt: {
    type: Date,
default: Date.now,
get: (date) =>  moment(date).format("MMM Do YY")
}
  
});


module.exports = reactionSchema;