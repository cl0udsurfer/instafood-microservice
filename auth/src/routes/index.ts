import express from 'express';
import { validateRequest } from '@instafood/common';
import { userSignUpValidator } from '../validators';
import { signup } from '../controllers/signup';

const router = express.Router();

router.post('/api/auth/signup', userSignUpValidator, validateRequest, signup);

export { router as authRouter };
