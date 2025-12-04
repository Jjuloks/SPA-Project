import React from "react";
import { useState } from "react";
import '../pages/Form.css'

  function Odczyt() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [uwagi, setUwagi] = useState("");
    const [wybor, setWybor] = useState("Spa");
    const [ocena, setOcena] = useState("5 gwiazdek")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Imie", name, "Nazwisko", surname, "Uwagi", uwagi, "Wybral: ", wybor, "Ocenil nas na ", ocena)
 
    }


 

  return (
<div> 
     <form>
      <label>Imię</label>
      <br/>
      <input type="text"  value={name} onChange={(e) => setName(e.target.value)}></input>
          <br/>
      <label>Nazwisko</label>
      <br/>
      <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}></input>
      <br/>
      <label>Zabieg</label>
      <br/>
      <select name="zabiegi" onChange={(e) => setWybor(e.target.value)}>
        <option value="Spa">Spa</option>
         <option value="Sauna">Sauna</option>
          <option value="Masaz">Masaz</option>
      </select>
      <br/>
      <label>Uwagi</label>
      <br/>
      <textarea value={uwagi} onChange={(e) => setUwagi(e.target.value)}></textarea>
      <br/>
      <label>Ocena naszego lokalu</label>
      <br/>
      <select name="oceny" onChange={(e) => setOcena(e.target.value)}>
        <option value="1gwiazdka">1 gwiazdka</option>
        <option value="2gwiazdek">2 gwiazdki</option>
        <option value="3gwiazdki">3 gwiazdki</option>
        <option value="4gwiazdki">4 gwiazdki</option>
        <option value="5gwiazdek">5 gwiazdek</option>
      </select>
      <br/>
      <button type="submit" onClick={handleSubmit}>Wyślij</button>
     </form>
      <p id="wynik"></p>
      
    </div>
  );
};


export  default Odczyt;


