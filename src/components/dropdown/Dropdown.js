import React from 'react';
import { useState } from 'react';
import css from './Dropdown.module.css';
import { LIST_TYPE } from '../../config';
import arrowSelect from '../../images/arrowSelect.svg'

const Dropdown = (props) => {
   const { tasks, title, type } = props
   const [isDropdownOpen, setDropdownOpen] = useState(false)

   const handleSelectClick = () => {
      setDropdownOpen(!isDropdownOpen)
   }

   const handleOptionClick = () => {
      console.log('sss')
   }

   return (
      <div className={css.wrapperSelect}>
         <seleсt className={css.select} value={''}>
            <div className={css.divSelect}></div>
            <img className={css.arrowSelect} src={arrowSelect} alt='' onClick={handleSelectClick} />
         </seleсt>
         {isDropdownOpen &&
            (<div className={css.wrapper}>
               <option className={css.taskName} onClick={handleOptionClick}>{'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}</option>
               <option className={css.taskName}>{'bbb'}</option>
            </div>)
         }
      </div >
   )
}
export default Dropdown;