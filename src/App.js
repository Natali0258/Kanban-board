import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
//import data from './mock.json';

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
    //console.log('localStorage=', tasks)
  }, [tasks]) //callback запускается только когда изменяться данные в массиве [tasks]

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
