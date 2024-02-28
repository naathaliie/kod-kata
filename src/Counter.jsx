/* Skapa en ny komponent Counter som har en knapp för 
att räkna upp och en knapp för att räkna ner. Siffran visas 
mellan knapparna. Lägg till Counter i App. */

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAddClick = () => {
        //console.log("+1");
        setCount(count +1)
    };

    const handleRemoveClick = () => {
        //console.log("-1");
        setCount(count -1)
    };

    return <div>
        <button onClick={handleAddClick}>+</button>
        <p>{count}</p>
        <button onClick={handleRemoveClick}>-</button>
    </div>
};

export default Counter;