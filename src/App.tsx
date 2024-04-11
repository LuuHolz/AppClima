import { useState } from 'react'
import './App.css'
import './Styles/Style.css'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Home />
    </>
  )
}

export default App
