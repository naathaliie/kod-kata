import { useState } from "react";
import "../src/App.css";

/* Skapa en ny komponent DropDown som har en ruta 
för att visa text och en dropdown. När man väljer ngt 
val i dropdownen så ska det visas i textrutan.
 Komponenten kan ta emot en array med fordon (strängar) 
 som läggs till i dropdownen. */

const DropDown = () => {
//En array med hundraser
const [dog, setDog] = useState(null);

const cuteDogs = ["Dalmatiner", "Chow Chow", "Papillon", "Cocker spaniel", "Boer boel"];
const handleOnClick = (e) => {
  console.log(e.target.value);
  setDog(e.target.value);
};

  return (
    <div className="dropDownDiv">
      <h1>Dropdown</h1>
      <div className="theDropDown">
        <label htmlFor="dropDown">Söta hundraser</label>
        <select name="dogs" id="dropDown" onClick={handleOnClick}>
          <option value="">Söta voffsingar</option>
          {cuteDogs.map((dog, index) => {
              return <option key={index} value={`${dog}`}>{dog}</option>
          })}
        </select>
      </div>
      <div className="DropDownBox">
        <h2>{dog}</h2>
      </div>
    </div>
  );
};

export default DropDown;
