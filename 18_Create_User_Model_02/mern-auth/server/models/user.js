const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");

// User Schema
const UserSchema = new Schema(
  {
    username: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    role: { type: String, default: "member" },
    hashed_password: { type: String, required: true },
    salt: { type: String, required: true },
    resetPasswordToken: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

// Virtual
UserSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    (this.salt = this.createSalt()),
      (this.hashed_password = this.encryptPassword(password));
  })
  .get(function () {
    return this._password;
  });

// Methods
// Create stalt: Return a random string, which adds additional security to hased_password
UserSchema.methods.createSalt = function () {
  return crypto.randomBytes(16).toString("hex");
};

// Encrypt user password, returns hashed_password
UserSchema.methods.encryptPassword = function (password) {
  return crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
};

// Authenticate user: Return true or false
UserSchema.methods.authenticate = function (password) {
  return encryptPassword(password) === this.hashed_password;
};

module.exports = mongoose.model("User", UserSchema);
