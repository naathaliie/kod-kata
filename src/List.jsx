/* Skapa en ny komponent List som tar emot en prop animalArray 
som är en array av strängar med djurnamn. Komponenten visar upp 
dessa djurnamn med ul- och li-taggar. Visa List i App. */

const List = ({ animalArray }) => {
  return (
   <div className="listDiv"> <ul>
      {animalArray.map((animal, index) => {
        return <li key={index}>{animal}</li>;
      })}
    </ul></div>
  );
};

export default List;
