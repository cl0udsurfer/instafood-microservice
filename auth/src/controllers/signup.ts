import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '@instafood/common';
import { User } from '../models/User';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(
  process.env.SENDGRID_API_KEY!
);

export const signup = (req: Request, res: Response) => {
  const { email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (user) {
      throw new BadRequestError('Email in use');
    }

    const token = jwt.sign({ email, password }, process.env.JWT_KEY!, {
      expiresIn: '10m',
    });

    const emailData = {
      from: 'datakobs.dev@gmail.com',
      to: email,
      subject: `Account activation link`,
      text: `Your confirmation Email: ${process.env.CLIENT_URL}/api/auth/activate/${token}`,
    };

    sgMail
      .send(emailData)
      .then((sent) => {
        res.status(201).send('Successfully signed up. Check your emails.');
      })
      .catch((err) => {
        console.log(err.response.body.errors);
        throw new BadRequestError('Something went wrong');
      });
  });
};
