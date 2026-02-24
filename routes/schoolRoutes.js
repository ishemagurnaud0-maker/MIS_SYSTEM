import express from 'express';
import { getSchoolById } from '../middlewares/getSchool.js';
import { createStudent } from '../controllers/CreateStudentController.js';
import { deleteStudent } from '../controllers/DeleteStudentController.js';
import { getOneStudent } from '../controllers/GetOneStudentController.js';
import { getAllStudents } from '../controllers/GetStudentController.js';
import { updateStudent } from '../controllers/UpdateStudentController.js';

const schoolRouter = express.Router();

schoolRouter.get('/', getAllStudents);
schoolRouter.post('/create', createStudent);
schoolRouter.delete('/delete/:id', getSchoolById, deleteStudent);
schoolRouter.get('/:id', getSchoolById, getOneStudent);
schoolRouter.patch('/update/:id', getSchoolById, updateStudent);

export default schoolRouter;