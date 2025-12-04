import React from 'react';
import data from "../database/db.spa.json"
import "../pages/DataGraph.css"

const DataGraph = () => {
  const wszystkierezerwacje= data.rezerwacje;

  const listaDoWyswietlenia = wszystkierezerwacje.map((rezerwacja)=>
  <tr key={rezerwacja.id}><td>{rezerwacja.id}</td>
    <td>{rezerwacja.imie} {rezerwacja.nazwisko}</td>
    <td>{rezerwacja.email}</td>
    <td>{rezerwacja.zabieg}</td>
    <td>{rezerwacja.ocena}</td>
    <td>{rezerwacja.rodo ? "TAK" : "NIE"}</td>
    </tr>
  );

    return (
        <div>
          <h1 className="spa-tittle">Baza danych rezerwacji naszego spa</h1>
     <table className="spa-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Klient</th>
            <th>Email</th>
            <th>Zabieg</th>
            <th>Ocena</th>
            <th>RODO</th>
          </tr>
        </thead>

        <tbody>
          {listaDoWyswietlenia}
        </tbody>
      </table>
        </div>
    );
}

export default DataGraph;
