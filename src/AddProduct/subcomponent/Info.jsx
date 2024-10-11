import React, { useState } from 'react';

// Custom Hook to export info and setInfo
export const useInfo = () => {
  const [info, setInfo] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  return [info, setInfo]; // Return state and setter
};