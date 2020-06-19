import React from 'react';

import { ProductCard } from 'components';
import { ProductsRow, ProductsCol, ProductCardWrapper } from './Products.style';

const Products = ({ productData }) => {
  return (
    <>
      <ProductsRow>
        {productData.map((item, index) => (
          <ProductsCol key={index}>
            <ProductCardWrapper>
              <ProductCard
                title={item.title}
                description={item.description}
                image={item.image}
                weight={item.unit}
                currency={item.currency}
                price={item.price}
                salePrice={item.salePrice}
                discountInPercent={item.discountInPercent}
                data={item}
              />
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>
    </>
  );
};

export { Products };
