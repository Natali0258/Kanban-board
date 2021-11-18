import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import css from './TaskDetail.module.css';
import line1 from '../../images/line1.svg';
import line2 from '../../images/line2.svg';

const TaskDetail = (props) => {
   const match = useRouteMatch()
   const { taskId } = match.params
   const { tasks } = props

   const task = tasks.find(task => task.id === taskId)

   return (
      <div className={css.taskDetail}>
         {task ?
            (<>
               <div className={css.taskHeader}>
                  <h2 className={css.taskName}>{task.name}</h2>
                  <Link to='/'>
                     <div className={css.cross}>
                        <img className={css.line1} src={line1} alt='' />
                        <img className={css.line2} src={line2} alt='' />
                     </div>
                  </Link>
               </div>
               <p className={css.taskDescriptions}>{task.descriptions || 'This task has no description'}</p>
            </>) :
            (<>
               <Link to='/' className={css.back}>&#8592; Back</Link>
               <h2 className={css.taskName}>Task with this Id={taskId} does not exist</h2>
            </>)
         }
      </div>
   )
}
export default TaskDetail;
