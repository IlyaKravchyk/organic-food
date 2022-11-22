
export const FormItem = ({ type, placeholder, value, setValue, text }) => {

   const changeHandler = (event) => {
      setValue(event.target.value)
   }

   return (
      <div className="form__item" >
         <span className="form__name">{text}</span>
         <input className="form__input" type={type} onChange={changeHandler} placeholder={placeholder} value={value} required />
      </div >
   )
}