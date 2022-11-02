import { Router } from 'express';

import multer from 'multer';
import UserController from './app/controllers/userController.js';
import SessionController from './app/controllers/sessionController.js';
import FileController from './app/controllers/fileController.js';
import ProviderController from './app/controllers/providerController.js';
import AppointmentController from './app/controllers/appointmentController.js';

import authMiddleware from './app/middlewares/auth.js';
import multerConfig from './config/multer.js';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/appointments', AppointmentController.store);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
