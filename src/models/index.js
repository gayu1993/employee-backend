import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const uri = "mongodb://127.0.0.1:27017/"
const dbName = "EPE"

const options = {
  useNewUrlParser: true,
  dbName: dbName
}

mongoose.connect(uri, options);
let db = mongoose.connection;

// connection event handlers
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("connected", console.error.bind(console, "MongoDB database: " + dbName));
db.on("disconnected", console.error.bind(console, "MongoDB database: " + dbName));

// mongoose.Promise = global.Promise;
//mongoose.connect(`${process.env.DB_URL || 'mongodb://localhost:27017' }/${process.env.DB_NAME || 'EPE'}`)
//mongoose.connect('mongodb://localhost:27017/EPE')
// mongoose.connect('mongodb://127.0.0.1:27017/EPE', {
//   useNewUrlParser: true
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB', error);
//   });
export default mongoose
