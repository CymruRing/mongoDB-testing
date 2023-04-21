import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './navbar'
import Piece from './chessDisplay'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Piece/>

  </React.StrictMode>,
)
