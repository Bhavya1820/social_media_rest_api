const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    Default: Date.now
  }
})

postSchema.pre('save', async function(){
  try {
    const user = await mongoose.model('User').findByIdAndUpdate(this.author,{$push:{posts: this_id}},{new:true})
  } catch (error) {
    console.error(error)
  }
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post