import React from 'react';
import useFetchList from './useFetchList';
import { useAppDispatch, useAppSelector } from './redux';
import { ContainerType } from '../types/container';
import { clearProducts, clearUsers } from '../redux/features/selectedList';
import { Users } from '../api/models/users';
import products from '../redux/features/products';
import { Products } from '../api/models/products';

const useListPropsCollector = (container: ContainerType) => {
  useFetchList(container);
  const dispatch = useAppDispatch();

  const [searchParam, setSearchParam] = React.useState('');
  const list = useAppSelector((store) => store[container].data);

  const clearSelectedUsers = () => {
    dispatch(clearUsers());
  };
  const clearSelectedProducts = () => {
    dispatch(clearProducts());
  };

  const handleParamChange = (param: string) => {
    setSearchParam(param);
  };

  const filteredList = React.useMemo(() => {
    if (searchParam.trim() === '') return list;
    let filtered: Users | Products = [];
    if (container === 'users') {
      filtered = (list as Users).filter((item) => {
        return (
          item.name.firstname
            .toLowerCase()
            .includes(searchParam.toLowerCase()) ||
          item.email.toLowerCase().includes(searchParam.toLowerCase())
        );
      });
    }
    if (container === 'products') {
      filtered = (list as Products).filter((item) => {
        return (
          item.title.toLowerCase().includes(searchParam.toLowerCase()) ||
          item.description.toLowerCase().includes(searchParam.toLowerCase())
        );
      });
    }
    return filtered;
  }, [container, list, searchParam]);

  return {
    list: filteredList,
    clearSelectedUsers,
    clearSelectedProducts,
    handleParamChange,
  };
};

export default useListPropsCollector;
