import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodosPage } from './components/pages/TodosPages';
import { AboutPage } from './components/pages/AboutPage';

const App: React.FC = () => {

  return (<>
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route element={<TodosPage/>} path='/'/>

          <Route element={<AboutPage/>} path='about'/>
        </Routes>
      </div>
    </Router>
  </>)
}
export default App;
