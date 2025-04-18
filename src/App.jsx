import React, { useEffect, useState, useRef } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from '../src/page/Top.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Top />
    </>
  )
}

export default App
