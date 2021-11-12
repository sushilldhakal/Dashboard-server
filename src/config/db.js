const mongoose = require("mongoose");
// const config = require("config");
// const db = config.get("mongoURI");

const db = process.env.URI_MONGO;

// mongoose
//   .connect(process.env.URI_MONGO, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch((err) => console.log(err));
const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
