import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Home from './WebHome';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HiistorySample';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/profiles">profiles</Link>
        </li>
        <li>
          <Link to="/history">history</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles" element={<Profiles />}>
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="/history" element={<HistorySample />} />
      </Routes>
    </div>
  );
}

export default App;
