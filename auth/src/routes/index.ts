import express from 'express';
import { validateRequest, currentUser } from '@instafood/common';
import { userSignUpValidator, userSignInValidator } from '../validators';
import { signup } from '../controllers/signup';
import { signin } from '../controllers/signin';
import { accountActivation } from '../controllers/accountActivation';

const router = express.Router();

router.get('/api/auth/current-user', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

router.post('/api/auth/signup', userSignUpValidator, validateRequest, signup);
router.post('/api/auth/signin', userSignInValidator, validateRequest, signin);
router.post('/api/auth/account-activation', accountActivation);

export { router as authRouter };
