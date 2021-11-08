import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import data from './mock.json';

function App() {
  const [tasks, setTasks] = useState(data)
  return (
    <div className='css.wrapper'>
      <Router>
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </Router>
    </div>
  );
}

export default App;
