// const express = require("express");
// const router = express.Router();
// const { createStudent, getAllStudents, getStudent, updateStudent, deleteStudent } = require("../controller/studentController");

// router.post("/create",createStudent);
// router.get("/get",getAllStudents);
// router.get("/get/:id",getStudent);
// router.put("/update/:id",updateStudent);
// router.delete("/delete/:id",deleteStudent);

// module.exports = router;
const express = require("express");
const router = express.Router();

const {
  createStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent
} = require("../controller/studentController");

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student management APIs
 */

/**
 * @swagger
 * /student/create:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - age
 *             properties:
 *               name:
 *                 type: string
 *                 example: Kartik Sharma
 *               email:
 *                 type: string
 *                 example: kartik@example.com
 *               age:
 *                 type: number
 *                 example: 22
 *     responses:
 *       201:
 *         description: Student created successfully
 *       400:
 *         description: Failed to create student
 */
router.post("/create", createStudent);


/**
 * @swagger
 * /student/get:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: List of all students
 *       400:
 *         description: Failed to fetch students
 */
router.get("/get", getAllStudents);


/**
 * @swagger
 * /student/get/{id}:
 *   get:
 *     summary: Get a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Student MongoDB ID
 *     responses:
 *       200:
 *         description: Student fetched successfully
 *       400:
 *         description: Failed to fetch student
 */
router.get("/get/:id", getStudent);


/**
 * @swagger
 * /student/update/{id}:
 *   put:
 *     summary: Update a student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Student MongoDB ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Kartik Sharma
 *               email:
 *                 type: string
 *                 example: kartik@example.com
 *               age:
 *                 type: number
 *                 example: 23
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       404:
 *         description: Student not found
 *       400:
 *         description: Failed to update student
 */
router.put("/update/:id", updateStudent);


/**
 * @swagger
 * /student/delete/{id}:
 *   delete:
 *     summary: Delete a student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Student MongoDB ID
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 *       400:
 *         description: Failed to delete student
 */
router.delete("/delete/:id", deleteStudent);

module.exports = router;