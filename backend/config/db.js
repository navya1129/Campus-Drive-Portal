const mongoose = require("mongoose");

const connectDB = async () => {

  try {

    await mongoose.connect("mongodb+srv://admin:admin%4099@cluster0.9ac46ur.mongodb.net/");

    console.log("✅ MongoDB Connected");

  } catch (error) {

    console.error("❌ MongoDB Connection Failed");
    process.exit(1);

  }

};

module.exports = connectDB;