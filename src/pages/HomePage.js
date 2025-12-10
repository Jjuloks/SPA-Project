import React from 'react';
import Background from '../assets/spabackground.jpg';
import HomePageCss from '../pages/HomePage.css'
import OfferCard from "../comp/OfferCard.jsx"
import Sauna from '../assets/sauna.jpg'
import { useNavigate } from "react-router-dom";

const StronaGlowna = () => {
     const navigate = useNavigate();

    return (
        <div className="homepage">
            <div className="fontaa">
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <h1>SPA Białystok</h1>
            <h2>ul.Lipowa 12, 15-369 Białystok</h2>
             </div>
            <div className="oferty"> 
        <OfferCard/>
                  </div>
                  <div className="btnzamowienie">
                     <button className="btnZamow" onClick={() => navigate("/products")}>Zamów już teraz!</button>
                  </div>
        </div>
    );
}

export default StronaGlowna;
