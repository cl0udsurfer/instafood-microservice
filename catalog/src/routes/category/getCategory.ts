import express, { Request, Response } from 'express';
import { NotFoundError } from '@instafood/common';
import { Category } from '../../models/Category';

const router = express.Router();

router.get('/api/catalog/category', async (req: Request, res: Response) => {
  const categories = await Category.find({}).populate('products');

  res.send(categories);
});

router.get('/api/catalog/category/:id', async (req: Request, res: Response) => {
  const category = await Category.findById(req.params.id).populate('products');

  if (!category) {
    throw new NotFoundError();
  }

  res.send(category);
});

export { router as indexCategoryRouter };
