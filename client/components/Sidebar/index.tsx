import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { CategoryIcon, ArrowDropDown, Popover, TreeMenu } from 'components';

import {
  CategoryWrapper,
  TreeWrapper,
  PopoverHandler,
  PopoverWrapper,
  SidebarWrapper,
  RequestMedicine,
  Loading,
} from './Sidebar.style';

const Sidebar = ({ categoryData }) => {
  return (
    <CategoryWrapper>
      <PopoverWrapper>
        <Popover
          handler={
            <PopoverHandler>
              <div>
                <CategoryIcon />
                Select your Category
              </div>
              <div>
                <ArrowDropDown />
              </div>
            </PopoverHandler>
          }
          className='category-popover'
          content={
            <>
              <TreeMenu data={categoryData} />
            </>
          }
        />
      </PopoverWrapper>

      <SidebarWrapper style={{ paddingTop: 45 }}>
        <Scrollbars
          universal
          autoHide
          autoHeight
          autoHeightMax={688}
          renderView={(props) => (
            <div
              {...props}
              style={{
                ...props.style,
                marginLeft: 0,
                marginRight: props.style.marginRight,
              }}
            />
          )}
        >
          <TreeWrapper>
            <TreeMenu data={categoryData} />
          </TreeWrapper>
        </Scrollbars>
      </SidebarWrapper>
    </CategoryWrapper>
  );
};

export { Sidebar };
