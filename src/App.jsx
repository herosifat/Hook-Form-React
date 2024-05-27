import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StateFullForm from './Components/StateFullForm/StateFullForm'
import RefForm from './Components/RefForm/RefForm'
import HokForm from './Components/HokForm/HokForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <HokForm></HokForm>
      {/* <RefForm></RefForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <SimpleForm></SimpleForm> */}
    </>
  )
}

export default App
