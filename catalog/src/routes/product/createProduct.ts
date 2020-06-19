import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@instafood/common';
import { Product } from '../../models/Product';
import { natsWrapper } from '../../natsWrapper';
import { ProductCreatedPublisher } from '../../events/publishers/productCreatedPublisher';

const router = express.Router();

router.post(
  '/api/catalog/product',
  [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('category').not().isEmpty().withMessage('Category is required'),
    body('price')
      .isFloat({ gt: 0 })
      .withMessage('Price must be greater than 0'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, price, category } = req.body;

    const product = Product.build({
      title,
      price,
      category,
      userId: 'userId!',
    });
    await product.save();

    await new ProductCreatedPublisher(natsWrapper.client).publish({
      id: product.id,
      title: product.title,
      price: product.price,
      userId: product.userId,
    });

    res.status(201).send(product);
  }
);

export { router as createProductRouter };
