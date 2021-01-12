import express from 'express';
const router = express.Router();
import { userLogin, userRegister } from '../controller/userController.js';
// import { saveGuard } from '../middleware/authMiddleware.js';

router.post('/', userRegister);
router.post('/login', userLogin);

export default router;
