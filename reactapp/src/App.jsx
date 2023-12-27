import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Concept from './assets/Concept'
import Simplecountercomponent from './components/Simplecountercomponent'
import PureCounterComponent from './components/Purecountercomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Simplecountercomponent />
    <PureCounterComponent />
    {/* <Concept /> */}
    </>
  )
}

export default App
