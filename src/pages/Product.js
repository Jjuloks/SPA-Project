import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();
  const { state } = useLocation(); 
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    if (state && typeof state.id !== "undefined") {
      setProductId(state.id);
    }
  }, [state]);

  if (productId == null) {
    return (
      <div>
        <h3>Brak produktu</h3>
        <button onClick={() => navigate("/products")}>Wróć do listy</button>
      </div>
    );
  }

  return (
    <div>
      <h3>Produkt #{productId}</h3>
      <button onClick={() => navigate("/products")}>Powrót</button>
    </div>
  );
}

