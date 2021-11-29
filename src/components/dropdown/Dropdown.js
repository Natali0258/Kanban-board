import React from 'react';
import { useState } from 'react';
import { LIST_TYPE } from '../../config';
import css from './Dropdown.module.css';
import arrowSelect from '../../images/arrowSelect.svg'

const Dropdown = (props) => {
   const { tasks, setTasks, title, isButtonSubmit, setButtonSubmit, dropdownTask } = props
   const [isDropdownOpen, setDropdownOpen] = useState(false)

   const handleSelectClick = () => {
      if (!isDropdownOpen) {
         setDropdownOpen(!isDropdownOpen)
      } else {
         setButtonSubmit(!isButtonSubmit)
         setDropdownOpen(!isDropdownOpen)
      }
   }

   const handleOptionClick = (e) => {
      //определим index задачи из массива dropdownTask, по которой был клик
      const clickTaskIndex = dropdownTask.findIndex(task => e.target.value === task.name)

      //массив с измененной задачей
      const modifiedTasks = tasks.map(task => {
         if (task.id === dropdownTask[clickTaskIndex].id) {
            let upTitle;
            if (title === 'In Progress') {
               return {
                  ...task, status: LIST_TYPE.IN_PROGRESS
               }
            }
            upTitle = title
            console.log('upTitle=', upTitle)
            return { ...task, status: LIST_TYPE[upTitle.toUpperCase()] }
         }
         return task
      })
      setTasks(modifiedTasks)
      setDropdownOpen(!isDropdownOpen)
      setButtonSubmit(!isButtonSubmit)
   }


   return (
      <div className={css.wrapperSelect}>
         {isButtonSubmit &&
            (<seleсt className={css.select} value={''}>
               <div className={css.divSelect}></div>
               <img className={css.arrowSelect} src={arrowSelect} alt='' onClick={handleSelectClick} />
            </seleсt>)
         }
         {isDropdownOpen &&
            (<div className={css.wrapper}>
               {dropdownTask.map(task => {
                  return (
                     <option key={task.id} value={task.name} className={css.taskName} onClick={handleOptionClick}>{task.name}</option>
                  )
               })}
            </div>)
         }
      </div >
   )
}
export default Dropdown;