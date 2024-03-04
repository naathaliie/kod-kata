import "../src/App.css";

/* Skapa en ny komponent DropDown som har en ruta 
för att visa text och en dropdown. När man väljer ngt 
val i dropdownen så ska det visas i textrutan.
 Komponenten kan ta emot en array med fordon (strängar) 
 som läggs till i dropdownen. */

const DropDown = () => {
  return (
    <div className="dropDownDiv">
      {" "}
      <h1>DropDown</h1>
    </div>
  );
};

export default DropDown;
