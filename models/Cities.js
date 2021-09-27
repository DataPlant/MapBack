const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    cityname: String,
    headerimg: String,
    pins: [{ type:mongoose.Types.ObjectId, ref: 'Pins'}]
})

const Cities = mongoose.model('City', citySchema);

module.exports = Cities;