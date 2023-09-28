import React from 'react';
import { Link } from "react-router-dom";
import css from './DropDownMenu.module.css';

const DropDownMenu = ({ isDropDownMenu, setDropDownMenu }) => {

   return (
      <>
         <div className={css.triangle}></div>
         <div className={css.menu}>
            <Link to={"/"}>
               <option className={css.link} onClick={() => setDropDownMenu(!isDropDownMenu)}>Profile</option>
            </Link>
            <Link to={"*"}>
               <option className={css.link} onClick={() => setDropDownMenu(!isDropDownMenu)}>Log Out</option>
            </Link>
         </div>
      </>
   )
}
export default DropDownMenu;