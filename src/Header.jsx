/* Skapa en ny komponent Header som tar emot en prop headerText
 och visar upp den med en h1-tagg. Lägg till Header i App. */

const Header = ({ headerText }) => {
  return <div className="headerDiv"> {headerText}</div>;
};

export default Header;
