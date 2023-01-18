import './styles/global.css'
import Habits from "./components/Habits"

function App() {


  return (
    <div className="App">
      <Habits completed={1}/>
      <Habits completed={2}/>
      <Habits completed={3}/>
      <Habits completed={4}/>
    </div>
  )
}

export default App
