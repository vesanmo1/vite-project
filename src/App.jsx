import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { useState } from 'react'
import './scss/global.scss';
import Styleguide from './views/styleguide/Styleguide'
import Topbar from './components/top-bar/Topbar'
import CheckIcon from './components/icons/Icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <main>
      <Topbar />
      <CheckIcon className="background-color"></CheckIcon>
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
