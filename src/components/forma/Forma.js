import React from 'react';
import { useState, useRef } from 'react';
import css from './Forma.module.css';

const Forma = (props) => {
   const { addNewTask, isButtonSubmit, setButtonSubmit, isFormOpen, setFormOpen, handleSubmitClick, formaEl } = props
   const [values, setValues] = useState({
      name: '',
      descriptions: ''
   })
   const [isFormValid, setFormValid] = useState(true)
   //если форма не заполнена, то поле нажатия кнопки "Submit" (fillInForm=true) выходит предупреждение, 
   //после повтоного нажатия кнопки (fillInForm=false) форма закрывается
   const [fillInForm, setFillInForm] = useState(true)

   //изменение данных в полях input и texterea
   const handleChange = (e) => {
      setFormValid(true)
      const fieldName = e.target.name  //свойство name соответствующего элемента (inpt, textarea)
      setValues({ ...values, [fieldName]: e.target.value }) //в поле, которое меняет пользователь записали значение, которое меняет пользователь
      console.log('handleChange, value=', e.target.value, 'isFormValid=', isFormValid, 'isButtonSubmit=', isButtonSubmit, 'isFormOpen=', isFormOpen, 'fillInForm=', fillInForm)
   }

   const handleFormSubmit = (e) => {
      e.preventDefault() //запрет на отправку формы, при этом не будет перезагружаться страница
      if (values.name) { //если поле импута не пустое, то данные формы будут переданы в newTask
         addNewTask(values.name, values.descriptions)
         console.log('1newTask', values.name)
         setFormValid(true) //сброс на дефолт тех ошибок, которые были до этого
         setFillInForm(!fillInForm)  //сброс на дефолт тех ошибок, которые были до этого
         console.log('2newTask, value=', values.name, 'isFormValid=', isFormValid, isFormOpen)
         setValues({ name: '', descriptions: '' })
         setButtonSubmit(!isButtonSubmit)
         setFormOpen(!isFormOpen)
         console.log('3newTask, value=', values.name, 'isFormValid=', isFormValid, 'isButtonSubmit=', isButtonSubmit, 'isFormOpen=', isFormOpen, 'fillInForm=', fillInForm)
      } else {
         if (fillInForm) {
            setFormValid(false)
            setFillInForm(false)
            console.log('4newTask, value=', values.name, 'isFormValid=', isFormValid, 'isButtonSubmit=', isButtonSubmit, 'isFormOpen=', isFormOpen, 'fillInForm=', fillInForm)
         } else {
            setButtonSubmit(false)
            setFormOpen(false)
            console.log('5newTask, value=', values.name, 'isFormValid=', isFormValid, 'isButtonSubmit=', isButtonSubmit, 'isFormOpen=', isFormOpen, 'fillInForm=', fillInForm)
         }
      }
   }

   return (
      <>
         <form className={css.form} id='btn' ref={formaEl} handleSubmitClick={handleSubmitClick} onSubmit={handleFormSubmit}>
            <input className={css.name}
               id='taskName'
               type='text'
               name='name'
               value={values.name}
               /*required Обязательное для заполнения поле */
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
