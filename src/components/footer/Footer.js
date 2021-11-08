import React from 'react';
import css from './Footer.module.css';

class Footer extends React.Component {
   render() {
      return (

         <footer className={css.footer}>
            <div className={css.wrapper}>
               <div className={css.tasks}>
                  <h1 className={css.activeTasks}>Active tasks: &lt;N&gt;</h1>
                  <h1 className={css.finishedTasks}>Finished tasks: &lt;M&gt;</h1>
               </div>
               <h1 className={css.info}>Kanban board by &lt;NAME&gt;, &lt;YEAR&gt;</h1>
            </div>
         </footer>

      )
   }
}
export default Footer;