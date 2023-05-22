import React from 'react';
import useListPropsCollector from '../hooks/useListPropsCollector';
import { ContainerType } from '../types/container';
import { Users } from '../api/models/users';
import { Products } from '../api/models/products';
import Card from '../components/Card';
import { useAppDispatch } from '../hooks/redux';
import { addItem } from '../redux/features/selectedList';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField/TextField';
import Styled from '@emotion/styled';

interface Props {
  containerType: ContainerType;
  apiAction: any;
}

const Container = Styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const TextFieldWrapper = Styled.div`
  margin: 10px 0;
  width: 100%
 }
`;

const ListSection = Styled.div`
  flex-grow: 1;
  overflow: scroll;
  overflow-x: hidden
`;

const CTAWrapper = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background=color: #FFFFFF;
  margin: 10px 0;
`;

const List: React.FC<Props> = ({ containerType }) => {
  const { list, clearSelectedUsers, clearSelectedProducts, handleParamChange } =
    useListPropsCollector(containerType);
  const dispatch = useAppDispatch();

  const handleClearList = () => {
    if (containerType === 'users') clearSelectedUsers();
    if (containerType === 'products') clearSelectedProducts();
  };

  return (
    <Container>
      <TextFieldWrapper>
        <TextField
          sx={{ width: '100%' }}
          id="filled-search"
          label={`Search for ${containerType}`}
          type="search"
          onChange={(e) => handleParamChange(e.target.value)}
        />
      </TextFieldWrapper>
      <ListSection>
        {containerType === 'users' &&
          (list as Users)?.map((item) => (
            <Card
              key={item.id}
              title={item?.name?.firstname}
              description={item.email}
              onClick={() =>
                dispatch(
                  addItem({
                    title: item.name.firstname,
                    id: item.id,
                    type: 'user',
                  })
                )
              }
            />
          ))}
        {containerType === 'products' &&
          (list as Products)?.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              onClick={() =>
                dispatch(
                  addItem({ title: item.title, id: item.id, type: 'product' })
                )
              }
            />
          ))}
      </ListSection>
      <CTAWrapper>
        <Button variant="contained" onClick={handleClearList}>
          Clear Selected {containerType}
        </Button>
      </CTAWrapper>
    </Container>
  );
};

export default List;
