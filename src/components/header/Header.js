import React from 'react';
import { useState } from 'react';
import css from './Header.module.css';
import ellipse from '../../images/ellipse.svg';
import avatar from '../../images/avatar.svg';
import arrow from '../../images/arrow.svg';
import arrow_up from '../../images/arrow_up.svg';
import DropDownMenu from '../dropDownMenu/DropDownMenu';

const Header = () => {
   const [isDropDownMenu, setDropDownMenu] = useState(false)

   const handleClick = () => {
      setDropDownMenu(!isDropDownMenu)
   }

   return (
      <header className={css.header}>
         <div className={css.wrapper}>
            <h1 className={css.title}>Awesome Kanban Board</h1>
            <div className={css.userAvatar}>
               <div>
                  <img className={css.ellipse} src={ellipse} alt='' />
                  <img className={css.avatar} src={avatar} alt='' />
               </div>
               {!isDropDownMenu && (
                  <img className={css.arrow} onClick={handleClick} src={arrow} alt='' />)}
               {isDropDownMenu && (
                  <>
                     <img className={css.arrow} onClick={handleClick} src={arrow_up} alt='' />
                     <DropDownMenu isDropDownMenu={isDropDownMenu} setDropDownMenu={setDropDownMenu} />
                  </>)}
            </div>
         </div>
      </header>
   )
}
export default Header;