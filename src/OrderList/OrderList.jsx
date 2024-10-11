import React from 'react';
import Card from './Card';
import { getArrayFromLocalStorage, deleteObjectFromLocalStorage} from '../Database';
import { Box ,Button} from '@mui/material';

const OrderList = () => {
  const item = getArrayFromLocalStorage('myObjectsArray')
  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        backgroundColor: "#FDFAD9",
        padding: 2,
        textAlign: "center",
        border: "4px solid #B8001F"
      }}
    >
      <Box p={2} sx={{
        display: "flex",
        justifyContent: "center",
      }}>

    <Button variant='contained'
        sx={{
          height: 40,
          width: 150,
          background: '#B8001F',
          padding : 1,
        }}
        onClick={() => {window.location.href = '/'}}
      >
        হোমে ফিরে যাই
      </Button>
    </Box>
      <h1 style={{ textAlign: 'center' }}>My Orders List</h1>
      {item && item.map((product, index) => (
        <Card item={product} key={index} id={index} deleteObject={deleteObjectFromLocalStorage}/>
      ))}
      </Box>

    </>
  );
};

export default OrderList;
