var mongoose = require("mongoose")

const PincodeSchema = mongoose.Schema({
  officeName: { type: String },
  pincode: { type: Number },
  taluk: { type: String },
  districtName: { type: String },
  stateName: { type: String },
})

module.exports = mongoose.model("Pincode", PincodeSchema)
