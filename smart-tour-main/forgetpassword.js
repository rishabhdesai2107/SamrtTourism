const UserModel = require("./modals/UserModel");
const yargs = require('yargs');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

dotenv.config();
const argv = yargs
  .option('email', {
    alias: 'u',
    describe: 'Admin email',
    demandOption: true,
  })
  .option('password', {
    alias: 'p',
    describe: 'New password',
    demandOption: true,
  })
  .argv;

const connectDb = async () => {
  try {
    console.log(process.env.MONGODB_URI)
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Server got connected");
  } catch (err) {
    console.log(`DB Server got error ${err.message}`);
  }
};

connectDb();

// Update admin user's password
const updateAdminPassword = async () => {
  try {
    const adminEmail = argv.email.toString(); // Change from username to email
    const newPassword = argv.password.toString();
    console.log("email:",adminEmail)
    console.log("new password:",newPassword)

    // Find the admin user
    const adminUser = await UserModel.findOne({ email: adminEmail });

    if (!adminUser) {
      console.log('Admin user not found.');
      return;
    }

    adminUser.password = newPassword;

    // Save the updated user
    await adminUser.save();

    console.log('Admin password updated successfully.');
  } catch (error) {
    console.error('Error updating admin password:', error);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
};

// Run the function
updateAdminPassword();
