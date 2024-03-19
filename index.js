import mongoose from "mongoose";
import User from "./models/user.schema.js";

(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bep-magic");
    console.log("Connected to MongoDB!");
    await User.insertMany({
      username: "admin",
      password: "mJ8OM5IgtgNRna5mQo946TE5g9wtQebV6fuIeOZ49sva3TEJos",
      role: "admin",
    });
  } catch (e) {
    console.error(e);
  }
  process.exit();
})();
