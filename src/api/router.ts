import { Router } from 'express';
import * as userController from './controller/userController';

const router = Router();

router.post('/user', userController.registerUser);
router.post('/user/login', userController.loginUser);


export default router;