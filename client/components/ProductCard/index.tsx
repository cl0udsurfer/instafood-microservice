import React from 'react';

import { Button, CartIcon } from 'components';
import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductInfo,
  SaleTag,
  DiscountPercent,
} from './ProductCard.style';

const ProductCard = ({ title, weight, currency, salePrice, price }) => {
  return (
    <ProductCardWrapper className='product-card'>
      <ProductImageWrapper>
        <h1>Image</h1>
      </ProductImageWrapper>
      <ProductInfo>
        <h3 className='product-title'>{title}</h3>
        <span className='product-weight'>{weight}</span>
        <div className='product-meta'>
          <div className='productPriceWrapper'>
            <span className='product-price'>
              {currency}
              {salePrice ? salePrice : price}
            </span>
          </div>

          <Button
            title='Cart'
            intlButtonId='addCartButton'
            iconPosition='left'
            colors='primary'
            size='small'
            variant='outlined'
            className='cart-button'
            icon={<CartIcon />}
          />
        </div>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export { ProductCard };
