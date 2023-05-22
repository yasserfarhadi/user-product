import React from 'react';
import { useAppDispatch } from './redux';
import { ContainerType } from '../types/container';
import { getUsers } from '../redux/features/users';
import { getProducts } from '../redux/features/products';

const useFetchList = (containerType: ContainerType) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (containerType === 'users') {
      dispatch(getUsers());
    } else if (containerType === 'products') {
      dispatch(getProducts());
    }
  }, [containerType, dispatch]);
};

export default useFetchList;
