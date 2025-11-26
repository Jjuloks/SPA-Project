import React from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';

import Homepage from  '../pages/HomePage'
import Products from '../pages/Products';
import Product from '../pages/Product';
import Concat from '../pages/Concat'
import ConcatPl from '../pages/ConcatPl'
import ConcatEn from '../pages/ConcatEn';

const Cont = () => {
 
const user = false;

    return (
        <>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='product' element={<Product/>}/>
            <Route path='concat' element={<Concat/>}>
                    <Route path='pl' element={<ConcatPl/>}/>
                    <Route path='en' element={<ConcatEn/>}/>
            </Route>
               
   
        </Routes>   
        </>
    );
}

export default Cont;
