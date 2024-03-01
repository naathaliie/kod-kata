/* Skapa en ny komponent Check som har två checkboxes med 
valen Katt och Hund, samt en ruta bredvid. När en checkbox blir 
iklickad så ska ordet visas i rutan bredvid. Ifall båda är iklickade 
ska rutan visa “Katt och Hund”. */

import { useState } from "react";

const Check = () => {

const [cat, setCat] = useState(false);
const [dog, setDog] = useState(false);

const handleChangeCat = () => {
    
    setCat(!cat);
};

const handleChangeDog = () => {
    setDog(!dog);
};

  return (
    <div className="checkDiv">
      <div>
        <input type="checkbox" id="katt" name="katt" onChange={handleChangeCat}/>
        <label htmlFor="katt">katt</label>
      </div>

      <div>
        <input type="checkbox" id="hund" name="hund" onChange={handleChangeDog}/>
        <label htmlFor="hund">hund</label>
      </div>
      <p>{cat && "katt"}{cat && dog && " och "}{dog && "hund"}</p>
    </div>
  );
};

export default Check;
