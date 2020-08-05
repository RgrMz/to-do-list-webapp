import React from 'react';
import './styles/App.css';
import './styles/header.css';
import './styles/Navbar.css';
import './styles/Task.css';
import Header from './components/Header';
import Maincontent from './components/Maincontent';

function App() {
  return (
    <div className="App">
      <Header />
      <Maincontent/>
    </div>
  );
}

export default App;