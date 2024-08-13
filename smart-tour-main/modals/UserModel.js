const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userModel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    type: { type: String, default: "admin" },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userModel.statics.createDefaultUser = async function () {
  const defaultUser = {
    name: "Admin",
    email: "admin@smarttourism.com",
    password: "12345678",
    type:"admin"
  };

  const existingUser = await this.findOne({ email: defaultUser.email });

  if (!existingUser) {
    const newUser = new this(defaultUser);
    await newUser.save();
    console.log("Default user created successfully.");
  } else {
    // console.log("Default user already exists.");
  }
};

userModel.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userModel.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userModel);

// Create default user when the model is created
User.createDefaultUser();

module.exports = User;
