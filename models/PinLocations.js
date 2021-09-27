const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pinSchema = new Schema({
    address: String,
    location: [],
    title: String,
    notes: String,
    images: [],
    city: String,
})

const Pins = mongoose.model('Pins', pinSchema);

module.exports = Pins;