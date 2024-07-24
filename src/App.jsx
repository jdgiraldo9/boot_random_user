import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomUser from './Components/RandomUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RandomUser />
    </div>
  )
}

export default App
