import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { Button, Label, TextInput, Checkbox } from 'flowbite-react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {<Login />}
      {/*<Dashboard />*/}
    </>
  )
}

export default App
