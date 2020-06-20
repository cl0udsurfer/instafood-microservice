import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '@instafood/common';
import { User } from '../models/User';

export const accountActivation = async (req: Request, res: Response) => {
  const { token } = req.body;

  /*
  if (token) {
    jwt.verify(token, process.env.JWT_KEY!, async function (err, decoded) {
      if (err) {
        console.log('JWT VERIFY ACCOUNT ACTIVATION ERROR', err);
        throw new BadRequestError('This link is expired.');
      }
      const { email, password } = jwt.decode(token);

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        throw new BadRequestError('Email in use');
      }

      const user = User.build({ email, password });
      await user.save();

      const userJwt = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_KEY!
      );

      
      req.session = {
        jwt: userJwt,
      };

      res.status(201).send(user);
    });
    
  } else {
    throw new BadRequestError('Something went wrong');
  }

  */
};
