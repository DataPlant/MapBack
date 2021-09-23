const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pinSchema = new Schema({
    address: String,
    location: [],
})

const Pins = mongoose.model('Pins', pinSchema);

module.exports = Pins;