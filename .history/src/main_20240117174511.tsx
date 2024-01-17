import React from 'react'
import ReactDom from 'react-dom'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App navigate={() => {}}/>
  </React.StrictMode>,
)
