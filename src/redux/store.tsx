import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import usersSlice from './features/users/index';
import productsSlice from './features/products/index';
import selectedItemsSlice from './features/selectedList/index';

const store = configureStore({
  reducer: {
    products: productsSlice,
    users: usersSlice,
    selectedItems: selectedItemsSlice,
  },
});

export const ReduxProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
