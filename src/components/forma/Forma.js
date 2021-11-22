import React from 'react';
import { useState } from 'react';
import css from './Forma.module.css';

const Forma = (props) => {
   const { addNewTask, isButtonSubmit, setButtonSubmit, isFormOpen, setFormOpen, ref } = props
   const [values, setValues] = useState({
      name: '',
      descriptions: ''
   })
   const [isFormValid, setFormValid] = useState(true)
   //если форма не заполнена, то поле нажатия кнопки "Submit" (fillInForm=true) выходит предупреждение, 
   //после повтоного нажатия кнопки "Submit" (fillInForm=false) форма закрывается
   const [fillInForm, setFillInForm] = useState(true)

   //изменение данных в полях input и texterea
   const handleChange = (e) => {
      setFormValid(true)
      const fieldName = e.target.name  //свойство name соответствующего элемента (inpt, textarea)
      setValues({ ...values, [fieldName]: e.target.value }) //в поле, которое меняет пользователь записали значение, которое меняет пользователь
      console.log(e.target.keyCode)
   }


   const handleFormSubmit = (e) => {
      e.preventDefault() //запрет на отправку формы, при этом не будет перезагружаться страница
      if (values.name) { //если поле импута не пустое, то данные формы будут переданы в newTask
         addNewTask(values.name, values.descriptions)
         setFormValid(true) //сброс на дефолт тех ошибок, которые были до этого
         setFillInForm(!fillInForm)
         setValues({ name: '', descriptions: '' })
         setButtonSubmit(!isButtonSubmit)
         setFormOpen(!isFormOpen)
      } else {
         if (fillInForm) {
            setFormValid(false)
            setFillInForm(false)
         } else {
            setButtonSubmit(false)
            setFormOpen(false)
         }
      }
   }

   return (
      <>
         <form className={css.form} id='btn' ref={ref} onSubmit={handleFormSubmit}>
            <input className={css.name}
               id='taskName'
               type='text'
               name='name'
               value={values.name}
               placeholder='Enter task name'
               onChange={handleChange} />
            {!isFormValid && <p className={css.error}>The task must have a title</p>}
            <textarea className={css.descriptions}
               id='taskDescriptions'
               type='text'
               name='descriptions'
               placeholder='Enter task description'
               value={values.descriptions}
               onChange={handleChange} />
         </form >
      </>
   )
}
export default Forma;
