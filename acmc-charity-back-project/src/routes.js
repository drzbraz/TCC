import { Router } from 'express';

import UserController from './app/controllers/userController.js';
import SessionController from './app/controllers/sessionController.js';

import authMiddleware from './app/middlewares/auth.js';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
