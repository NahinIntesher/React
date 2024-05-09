import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css';
import Box from './Components/box.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Box name="English" code="ENG 1011" color="red"/>
    <Box name="ICS" code="CSE 1011" color="green"/>
    <Box name="DSA" code="CSE 2215" color="blue"/>
  </React.StrictMode>
)
