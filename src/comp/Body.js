import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from '../pages/HomePage';
import Form from '../pages/Form';
import Product from '../pages/Product';
import DataGraph from '../pages/DataGraph';
import data from "../database/db.spa.json";

const Body = () => {
   const [rezerwacje, setRezerwacje] = useState(() => {
    const saved = localStorage.getItem("rezerwacje");
    if (saved) {
      return JSON.parse(saved);
    }
    return data.rezerwacje;
  });

    useEffect(() => {
    localStorage.setItem("rezerwacje", JSON.stringify(rezerwacje));
  }, [rezerwacje]);

  const dodajRezerwacje = (nowaRezerwacja) => {
    setRezerwacje((prev) => [...prev, nowaRezerwacja]);
  };

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='products' element={<Form dodajRezerwacje={dodajRezerwacje} />} />
      <Route path='product' element={<Product />} />
      <Route path='dataGraph' element={<DataGraph rezerwacje={rezerwacje} />}>
      </Route>
    </Routes>
  );
};

export default Body;