import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './scss/global.scss';
import MyTopBar from './components/top-bar/Topbar.scss'
import Styleguide from './views/styleguide/Styleguide'
import Topbar from './components/top-bar/Topbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <main>
      <Topbar />
      <Router>
        <Routes>
          <Route path="/styleguide" element={<Styleguide />} />
        </Routes>
      </Router>
      </main>

    </div>
  )
}

export default App
