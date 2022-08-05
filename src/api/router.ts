import { Router } from 'express';
import * as userController from './controller/userController';

const router = Router();

router.post('/user', userController.registerUser);


export default router;