const mongoose = require('mognoose');
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
  email: {
    type: String,
    require: true
  },
  driving: {
    type: Boolean,
    default: false
  }
});

const Driver = mongoose.Model('driver', DriverSchema);

module.exports = Driver;