import express from 'express';
import { signup,signin } from '../controller/authcontroller.js';

const router = express.Router();

router.post('/signUp', signup);
router.post('/signIn',signin);

export default router;
