import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import { json } from 'body-parser';
import { errorHandler, NotFoundError, currentUser } from '@instafood/common';

// Category
import { indexCategoryRouter } from './routes/category/getCategory';
import { createCategoryRouter } from './routes/category/createCategory';

// Product
import { indexProductRouter } from './routes/product/getProduct';
import { createProductRouter } from './routes/product/createProduct';
import { updateProductRouter } from './routes/product/updateProduct';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);
app.use(currentUser);

// Category Router
app.use(indexCategoryRouter);
app.use(createCategoryRouter);
app.use(updateProductRouter);

// Product Router
app.use(indexProductRouter);
app.use(createProductRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
