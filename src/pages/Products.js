import React from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const list = [{ id:1, name:"Produkt A" }, { id:2, name:"Produkt B" }, { id:3, name:"Produkt C" }];

  const openProduct = (id) => {
    navigate("/product", { state: { id } });
  };

  return (
    <div>
      <h2>Tutaj formularz</h2>
      
    </div>
  );
}



