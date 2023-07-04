var mongoose = require("mongoose")

var UserSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  role: { type: String },
  email: { type: String },
  address: {
    street: { type: String },
    flat: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    location: {
      coordinates: { type: Array },
      is_location_exact: { type: Boolean },
    },
  },
  phone: { type: Number },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  deletedAt: { type: Date },
})

module.exports = mongoose.model("User", UserSchema)
