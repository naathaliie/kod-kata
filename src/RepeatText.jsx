/* Skapa en ny komponent RepeatText som tar emot en prop 
count som är en siffra och text som är en sträng.
Komponenten innehåller sedan så många p-taggar som count 
är och texten inne i p-taggarna är det som finns i propen text. */

const RepeatText = ({ count, text }) => {


  const paragraph = Array.from({length: count}, (index) => (
    <p key={index}>{text}</p>
  ))

  return <div className="repeatTextDiv">{paragraph}</div>;
};

export default RepeatText;
