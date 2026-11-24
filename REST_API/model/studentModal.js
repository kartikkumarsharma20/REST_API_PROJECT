const mongoose = require("mongoose");
require("dotenv").config();
let studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
})

const studentModel = new mongoose.model("student", studentSchema);

module.exports = studentModel;