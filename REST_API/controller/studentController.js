const student = require("../model/studentModal");

let createStudent = async (req, res) => {
    try {
        let data = await student.create(req.body);
        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create student"
        });
    }
};

let getAllStudents = async (req, res) => {
    try {
        let students = await student.find();
        res.status(200).json({
            success: true,
            data: students
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to fetch students"
        });
    }
};

let getStudent = async (req, res) => {
    try{
        let data = await student.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to fetch student"
        });
    }
};

let updateStudent = async (req, res) => {
    try {
        let updatedStudent = await student.findByIdAndUpdate(req.params.id,req.body);
        if (!updatedStudent) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: updatedStudent
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update student"
        });
    }
};

let deleteStudent = async (req, res) => {
    try {
        let studentId = req.params.id;
        let deletedStudent = await student.findByIdAndDelete(studentId);
        if (!deletedStudent) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
            data: deletedStudent
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to delete student"
        });
    }
};
module.exports = {
    createStudent,
    getAllStudents,
    getStudent,
    updateStudent,
    deleteStudent
};