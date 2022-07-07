const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    img: {type: String, default: "None"}
}, { timestamps: true })

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;