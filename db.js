const mongose = require('mongoose')

const connectDB = async () => {
  //console.log(process.env.MONGODB_URI)
  try {
    await mongose.connect(process.env.MONGODB_URI)
    console.log("MongoDB connected")
  } catch (error) {
    console.error(error.message)
    process.exit(1)    
  }
}

module.exports = connectDB