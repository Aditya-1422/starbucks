import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';

import "../src/styles/App.scss"
import "../src/styles/header.scss"


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
