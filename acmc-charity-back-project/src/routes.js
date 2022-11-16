import { Router } from 'express';

import PatientController from './app/controllers/patientController.js';
import DoctorController from './app/controllers/doctorController.js';
import AppointmentController from './app/controllers/appointmentController.js';
import AdminController from './app/controllers/adminController.js';

import authMiddleware from './app/middlewares/auth.js';

const routes = new Router();

routes.post('/v1/admin', AdminController.store);
routes.post('/v1/admin/auth', AdminController.auth);
routes.put('/v1/admin/auth', AdminController.update);
routes.use(authMiddleware);

// PATIENT
routes.post('/v1/patient', PatientController.store);
routes.delete('/v1/patient', PatientController.delete);
routes.put('/v1/patient', PatientController.update);
routes.get('/v1/patient', PatientController.get);
routes.get('/v1/patient/all', PatientController.getAll);
routes.get('/v1/patient/find', PatientController.getByName);

// DOCTOR
routes.post('/v1/doctor', DoctorController.store);
routes.delete('/v1/doctor', DoctorController.delete);
routes.put('/v1/doctor', DoctorController.update);
routes.get('/v1/doctor', DoctorController.get);
routes.get('/v1/doctor/all', DoctorController.getAll);
routes.get('/v1/doctor/find', DoctorController.getByName);

// APPOINTMENT
routes.post('/v1/appointment', AppointmentController.store);
routes.delete('/v1/appointment', AppointmentController.delete);
routes.put('/v1/appointment', AppointmentController.update);
routes.get('/v1/appointment', AppointmentController.get);
routes.get('/v1/appointment/all', AppointmentController.getAll);
routes.get('/v1/appointment/find', AppointmentController.getByName);
export default routes;
