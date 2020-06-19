import React from 'react';
import { Modal } from '@redq/reuse-modal';

import { Banner, Products } from 'containers';
import BannerImg from 'image/grocery.png';
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
} from 'styled/pages.style';
import { Sidebar } from 'components';
import useNotification from 'hooks/useNotification';

const categoryData = [
  {
    id: 1,
    title: 'Fruits & Vegetables',
    slug: 'fruits-and-vegetables',
    products: [],
    type: 'grocery',
    icon: 'FruitsVegetable',
    children: [
      {
        id: 2,
        title: 'Fruits',
        slug: 'fruits',
        products: [],
        type: 'grocery',
      },
      {
        id: 3,
        title: 'vegetables',
        slug: 'vegetables',
        products: [],
        type: 'grocery',
      },
    ],
  },
];

const productData = [
  {
    id: 1,
    title: 'Sample Product',
    description: 'Sample Description',
    image: 'image',
    weight: '1lb',
    currency: '$',
    price: '5',
    salePrice: '3$',
    discountInPercent: '40%',
  },
];

const Index = () => {
  const { Notification } = useNotification();

  return (
    <Modal>
      <Notification />
      <>
        <Banner
          intlTitleId='groceriesTitle'
          intlDescriptionId='groceriesSubTitle'
          imageUrl={BannerImg}
        />
        <MainContentArea>
          <SidebarSection>
            <Sidebar categoryData={categoryData} />
          </SidebarSection>
          <ContentSection>
            <Products productData={productData} />
          </ContentSection>
        </MainContentArea>
      </>
    </Modal>
  );
};

export default Index;
