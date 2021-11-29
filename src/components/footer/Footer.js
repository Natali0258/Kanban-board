import React from 'react';
import css from './Footer.module.css';

const Footer = (props) => {
   const { tasks } = props
   const taskBacklog = tasks.filter(task => task.status === "backlog")
   const taskFinished = tasks.filter(task => task.status === "finished")
   return (

      <footer className={css.footer}>
         <div className={css.wrapper}>
            <div className={css.tasks}>
               <h1 className={css.activeTasks}>Active tasks: {taskBacklog.length}</h1>
               <h1 className={css.finishedTasks}>Finished tasks: {taskFinished.length}</h1>
            </div>
            <h1 className={css.info}>Kanban board by Tribendis N.V. 2021</h1>
         </div>
      </footer>

   )
}
export default Footer;