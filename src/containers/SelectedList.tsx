import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import Button from '@mui/material/Button';
import { clearAll, deleteItem } from '../redux/features/selectedList';
import Styled from '@emotion/styled';

const SelectedWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 0;
`;
const StyledSelectedList = Styled.div`
  flex-grow: 1;
  overflow: scroll;
  overflow-x: hidden;
`;

const CTAWrapper = Styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectedList = () => {
  const selectedList = useAppSelector((store) => store.selectedItems.data);
  const dispatch = useAppDispatch();

  return (
    <SelectedWrapper>
      <StyledSelectedList>
        {selectedList.map((item) => (
          <Button
            variant="contained"
            sx={{ borderRadius: 10, margin: '5px', fontSize: '12px' }}
            key={item.id + item.title}
            onClick={() =>
              dispatch(
                deleteItem({ title: item.title, id: item.id, type: item.type })
              )
            }
          >
            {item.title}
          </Button>
        ))}
      </StyledSelectedList>
      <CTAWrapper>
        <Button variant="contained" onClick={() => dispatch(clearAll())}>
          Clear All Selected Items
        </Button>
      </CTAWrapper>
    </SelectedWrapper>
  );
};

export default SelectedList;
