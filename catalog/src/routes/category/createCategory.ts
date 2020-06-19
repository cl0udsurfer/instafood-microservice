import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@instafood/common';
import { Category } from '../../models/Category';
import { natsWrapper } from '../../natsWrapper';
import { CategoryCreatedPublisher } from '../../events/publishers/categoryCreatedPublisher';

const router = express.Router();

router.post(
  '/api/catalog/category',
  [body('name').not().isEmpty().withMessage('Name is required')],
  validateRequest,
  async (req: Request, res: Response) => {
    const { name } = req.body;

    const category = Category.build({
      name,
    });

    await category.save();

    await new CategoryCreatedPublisher(natsWrapper.client).publish({
      id: category.id,
      name: category.name,
    });

    res.status(201).send(category);
  }
);

export { router as createCategoryRouter };
