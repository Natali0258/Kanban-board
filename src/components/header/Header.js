import React from 'react';
import css from './Header.module.css';
import ellipse from '../../images/ellipse.svg';
import avatar from '../../images/avatar.svg';
import arrow from '../../images/arrow.svg';

class Header extends React.Component {
   render() {
      return (
         <header className={css.header}>
            <div className={css.wrapper}>
               <h1 className={css.title}>Awesome Kanban Board</h1>
               <div className={css.userAvatar}>
                  <div>
                     <img className={css.ellipse} src={ellipse} alt='' />
                     <img className={css.avatar} src={avatar} alt='' />
                  </div>
                  <img className={css.arrow} src={arrow} alt='' />
               </div>
            </div>
         </header>
      )
   }
}
export default Header;