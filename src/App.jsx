import './App.css'
import Header from './Header'
import List from './List'
import RepeatText from './RepeatText'

function App() {
/* const headerText = "Välkommen till min sida"; */

  return (
    <>
      <h1>liten kod-kata react</h1>
      <Header headerText="Steg 4, klart"/>
      <RepeatText count={7} text="En liten båt blir ofta våt om magen när det stänker"/>
      <List animalArray={['ko', 'häst', 'hund', 'giraff']}/>
    </>
  )
}

export default App
