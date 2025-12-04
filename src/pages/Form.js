import React from "react";
import { useState } from "react";
import '../pages/Form.css'

  function Odczyt() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [uwagi, setUwagi] = useState("");
    const [wybor, setWybor] = useState("Spa");
    const [ocena, setOcena] = useState("5 gwiazdek")
    const [isChecked, setChecked] = useState("False");

   
    const rodo = isChecked ? "Uzytkownik zaakceptowal rodo" : "Uzytkownik nie zaakceptowal rodo";  


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Imie", name, "Nazwisko", surname, "Uwagi", uwagi, "Wybral: ", wybor, "Ocenil nas na ", ocena, "Rodo", rodo)
   
    }

  return (
<div> 
     <form>
     <div class="form-group">
      <label>Imię</label>
      <br/>
      <input type="text"  class="form-control" id="exampleFormControlInput3"   value={name} onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div class="form-group"> 
          <br/>
      <label>Nazwisko</label>
      <br/>
      <input type="text" class="form-control" id="exampleFormControlInput2" value={surname} onChange={(e) => setSurname(e.target.value)}></input>
      </div>
      <br/>
      <label for="exampleFormControlInput1">Email </label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="twojemail@gmail.com"></input>
    <br/>
      <label>Zabieg</label>
      <br/>
      <select class="form-control" name="zabiegi" onChange={(e) => setWybor(e.target.value)}>
        <option value="Spa">Spa</option>
         <option value="Sauna">Sauna</option>
          <option value="Masaz">Masaz</option>
      </select>
      <br/>
      <div class="form-group"> 
      <label for="exampleFormControlTextarea1">Uwagi</label>
      <br/>
      <textarea class="form-control" id="exampleFormControlTextarea1" value={uwagi} onChange={(e) => setUwagi(e.target.value)}></textarea>
      </div>
      <br/>
      <div class="form-group col-md-4"> 
      <label>Ocena naszego lokalu</label>
      <br/>
      <select class="form-control" name="oceny" onChange={(e) => setOcena(e.target.value)}>
        <option value="1gwiazdka">1 gwiazdka</option>
        <option value="2gwiazdek">2 gwiazdki</option>
        <option value="3gwiazdki">3 gwiazdki</option>
        <option value="4gwiazdki">4 gwiazdki</option>
        <option value="5gwiazdek">5 gwiazdek</option>
      </select>
      </div>
      <br/>
      <div class="form-check"> 
      <label class="form-check-label"><input type="checkbox" class="form-check-input" onChange={(e) => setChecked(e.target.checked)} checked={isChecked}></input>Wyrazam zgode na Rodo </label>
      </div>
      <br/>
      <button type="submit" onClick={handleSubmit}  class="btn btn-primary">Wyślij</button>
     </form>
      
    </div>
  );
};


export  default Odczyt;


