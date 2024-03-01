/* Skapa en ny komponent Radio som har en ruta 
för att visa text (div) samt två radioknappar. 
När man väljer en radioknapp ska dess text visas i rutan. */

import { useState } from "react";

const Radio = () => {

const [drone, setDrone] = useState("");

    const handleOnChange = (e) => {
        
        console.log(e.target.value);
        setDrone(e.target.value);
    };

  return (
    <div className="radioDiv">
      <fieldset>
        <legend>Select a maintenance drone: {drone}</legend>

        <div>
          <input type="radio" id="huey" name="drone" value="huey" onChange={handleOnChange} />
          <label htmlFor="huey">Huey</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" onChange={handleOnChange}  />
          <label htmlFor="dewey">Dewey</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie" onChange={handleOnChange}  />
          <label htmlFor="louie">Louie</label>
        </div>
      </fieldset>
    </div>
  );
};

export default Radio;
