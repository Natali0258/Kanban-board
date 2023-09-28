import React from 'react';
import css from './Board.module.css';
import { LIST_TYPE, LIST_TITLE } from '../../config.js';
import List from '../list/List';

const Board = (props) => {
   const { tasks, setTasks } = props

   //функция добавляет новую задачу в Backlog
   const addNewTask = (name, descriptions) => {
      //создание новой задачи
      const newTask = {
         status: LIST_TYPE.BACKLOG,
         id: String(Date.now()),
         name: name,
         descriptions: descriptions,
         created: new Date().toISOString()
      }
      //обновим state: создадим новый массив, поместим в него задачи из старого массива
      // и добавим в него новую задачу
      setTasks([...tasks, newTask])
   }

   return (
      <div className={css.board}>
         {Object.values(LIST_TYPE).map(type => {
            const filterTasks = tasks.filter(task => task.status === type)
            return <List key={type} tasks={tasks} setTasks={setTasks} filterTasks={filterTasks} title={LIST_TITLE[type]} addNewTask={addNewTask} type={type} />
         })
         }
      </div>
   )
}
export default Board;