import React from 'react';
import css from './DropDownMenu.module.css';

const DropDownMenu = () => {
   return (
      <>
         <div className={css.triangle}></div>
         <div className={css.menu}>
            <option className={css.link}>Profile</option>
            <option className={css.link}>Log Out</option>
         </div>
      </>
   )
}
export default DropDownMenu;