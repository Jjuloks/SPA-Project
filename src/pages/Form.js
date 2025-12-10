import React, { useState } from "react";
import '../pages/Form.css';

const Form = ({ dodajRezerwacje }) => {
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [email, setEmail] = useState("");
  const [zabieg, setZabieg] = useState("Spa");
  const [uwagi, setUwagi] = useState("");
  const [ocena, setOcena] = useState("⭐⭐⭐⭐⭐");
  const [rodo, setRodo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nowaRezerwacja = {
      imie,
      nazwisko,
      email,
      zabieg,
      uwagi,
      ocena,
      rodo,
    };

    dodajRezerwacje(nowaRezerwacja);

    setImie("");
    setNazwisko("");
    setEmail("");
    setZabieg("Spa");
    setUwagi("");
    setOcena("⭐⭐⭐⭐⭐");
    setRodo(false);
  };

  return (
    <div className="form-container">
      <h1 className="h1-form">Dokonaj rezerwacji</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Imię</label>
          <br />
          <input
            type="text"
            className="form-control"
            value={imie}
            onChange={(e) => setImie(e.target.value)}
          />
        </div>

        <div className="form-group">
          <br />
          <label>Nazwisko</label>
          <br />
          <input
            type="text"
            className="form-control"
            value={nazwisko}
            onChange={(e) => setNazwisko(e.target.value)}
          />
        </div>

        <br />
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="twojemail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <label>Zabieg</label>
        <br />
        <select
          className="form-control"
          value={zabieg}
          onChange={(e) => setZabieg(e.target.value)}
        >
          <option value="Spa">Spa</option>
          <option value="Sauna">Sauna</option>
          <option value="Masaz">Masaz</option>
        </select>

        <br />
        <div className="form-group">
          <label>Uwagi</label>
          <br />
          <textarea
            className="form-control"
            value={uwagi}
            onChange={(e) => setUwagi(e.target.value)}
          />
        </div>

        <br />
        <div className="form-group col-md-4">
          <label>Ocena naszego lokalu</label>
          <br />
          <select
            className="form-control"
            value={ocena}
            onChange={(e) => setOcena(e.target.value)}
          >
            <option value="⭐">⭐</option>
            <option value="⭐⭐">⭐⭐</option>
            <option value="⭐⭐⭐">⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
          </select>
        </div>

        <br />
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              onChange={(e) => setRodo(e.target.checked)}
              checked={rodo}
            />
            Wyrażam zgodę na RODO
          </label>
        </div>

        <br />
        <button type="submit" className="btnWyslij">
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default Form;
