import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import css from './List.module.css';
import plus from '../../images/plus.svg';
import Forma from '../forma/Forma';
import { LIST_TYPE } from '../../config';
import Dropdown from '../dropdown/Dropdown';

const List = (props) => {
   const { tasks, setTasks, filterTasks, addNewTask, title, type } = props
   const [isButtonSubmit, setButtonSubmit] = useState(false)
   const [isFormOpen, setFormOpen] = useState(false)
   const ref = useRef(null)
   const [isDropdownOpen, setDropdownOpen] = useState(false)
   const [isDisabled, setDisabled] = useState(false)
   // const [isDisable, setDisable] = useEffect(false)

   const handleAddClick = () => {
      setButtonSubmit(!isButtonSubmit)
      setFormOpen(!isFormOpen)
      setDropdownOpen(true)
   }

   let dropdownTask;
   switch (title) {
      case 'Ready':
         dropdownTask = tasks.filter(task => task.status === 'backlog');
         break;
      case 'In Progress':
         dropdownTask = tasks.filter(task => task.status === 'ready');
         break;
      case 'Finished':
         dropdownTask = tasks.filter(task => task.status === 'in Progress');
         break;
      default:
         dropdownTask = [1];
         break;
   }
   useEffect(() => {
      //переключение кнопка Add с активной на неактивную
      if (dropdownTask.length === 0) {
         setDisabled(!isDisabled)
      }
      //переключение кнопка Add с неактивной на активную
      if (dropdownTask.length !== 0 && isDisabled) {
         setDisabled(!isDisabled)
      }
   }, [dropdownTask.length])

   return (
      <div className={css.list}>
         <h2 className={css.listTitle}>{title}</h2>
         {filterTasks.map(task => {
            return (
               <Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
                  <div key={task.id} className={css.task}>{task.name}</div>
               </Link>)
         })}

         {isFormOpen && (type === LIST_TYPE.BACKLOG) && (
            <Forma addNewTask={addNewTask} isFormOpen={isFormOpen} setFormOpen={setFormOpen} isButtonSubmit={isButtonSubmit} setButtonSubmit={setButtonSubmit} ref={ref} />
         )}

         {isDropdownOpen && (type !== LIST_TYPE.BACKLOG) && (
            <Dropdown isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen} isButtonSubmit={isButtonSubmit} setButtonSubmit={setButtonSubmit} tasks={tasks} setTasks={setTasks} filterTasks={filterTasks} dropdownTask={dropdownTask} title={title} type={type} />
         )}

         {isButtonSubmit && (type === LIST_TYPE.BACKLOG) &&
            (< button className={css.submit}
               type='submit'
               form='btn'
               ref={ref}>
               Submit
            </button >)
         }
         {!isButtonSubmit && isDisabled &&
            (<button className={css.buttonDisabled} type='button' disabled={{ disabled: true }}>
               <img className={css.plus} src={plus} alt='' />Add card</button>)
         }
         {
            !isButtonSubmit && !isDisabled &&
            (<button className={css.button} type='button' onClick={handleAddClick}>
               <img className={css.plus} src={plus} alt='' />Add card</button>)
         }
      </div >
   )
}
export default List;