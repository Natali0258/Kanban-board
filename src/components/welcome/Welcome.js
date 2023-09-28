import css from './Welcome.module.css';

const Welcome = () => {
   return (
      <div className={css.welcome}>
         <h2 className={css.title}><span className={css.first}>Welcome!</span> Go to profile.</h2>
      </div>
   )
}
export default Welcome;