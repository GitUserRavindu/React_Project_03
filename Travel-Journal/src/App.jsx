import './App.css'
import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
import data from "./data.js"

function App() {
  const dataObj = data.map((item) => {
    return (
      <Card 
        key = {item.id}
        item = {item}
      />
    )
  })
  
  return (
    <>
      <Navbar />
      {dataObj}
      <hr className="hr-el"/>
    </>
  )
}

export default App
