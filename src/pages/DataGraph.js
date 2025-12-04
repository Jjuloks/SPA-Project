import React from 'react';
import "../pages/DataGraph.css";

const DataGraph = ({ rezerwacje }) => {
  const lista = rezerwacje.map((r, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{r.imie} {r.nazwisko}</td>
      <td>{r.email}</td>
      <td>{r.zabieg}</td>
      <td>{r.uwagi}</td>
      <td>{r.ocena}</td>
      <td>{r.rodo ? "TAK" : "NIE"}</td>
    </tr>
  ));

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
            <th>Uwagi</th>
            <th>Ocena</th>
            <th>RODO</th>
          </tr>
        </thead>
        <tbody>{lista}</tbody>
      </table>
    </div>
  );
};

export default DataGraph;
