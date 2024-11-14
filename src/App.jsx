import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Propps from './components/Propps' 

function App() {


  return (
    <div className="main">
       <p>Props 1</p>
    <Propps name="Taysir" age= {19}/>
    <p>Props 2</p>
    <Propps name="Rahman" age={30}/>
    </div>
    
  
    
    
  )
}

export default App
