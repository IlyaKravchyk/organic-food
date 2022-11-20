
export const FormItem = ({ type, placeholder, value, setValue, children }) => {

   const changeHandler = (event) => {
      setValue(event.target.value)
   }

   return (
      <div className="form__item" >
         <span className="form__name">{children}</span>
         <input className="form__input" type={type} onChange={changeHandler} placeholder={placeholder} value={value} required />
      </div >
   )
}