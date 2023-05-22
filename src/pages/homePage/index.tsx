import React from 'react';
import List from '../../containers/List';
import { getUsers } from '../../redux/features/users';
import { getProducts } from '../../redux/features/products';
import SelectedList from '../../containers/SelectedList';
import Styled from '@emotion/styled';

const ListWrapper = Styled.div`
  max-height: 100%;
  width: 380px;
  padding: 0 20px;
  background-color: #FFFFFF;
`;

const ListsContainer = Styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding: 40px;
`;

const MainPage = Styled.div`
  height: 100%; 
  background-color: #808080 
`;

const index = () => {
  return (
    <MainPage>
      <ListsContainer>
        <ListWrapper>
          <List containerType="users" apiAction={getUsers} />
        </ListWrapper>
        <ListWrapper>
          <List containerType="products" apiAction={getProducts} />
        </ListWrapper>
        <ListWrapper>
          <SelectedList />
        </ListWrapper>
      </ListsContainer>
    </MainPage>
  );
};

export default index;
