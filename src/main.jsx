import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import AllWork from './pages/AllWork.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="safe-area-top" />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<AllWork />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
