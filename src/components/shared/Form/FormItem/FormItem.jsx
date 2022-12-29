import style from "./FormItem.module.scss"

export const FormItem = ({ type, placeholder, value, setValue, text }) => {

   const changeHandler = (event) => {
      setValue(event.target.value)
   }

   return (
      <div className={style.item}>
         <span className={style.name}>{text}</span>
         <input className={style.input} type={type} onChange={changeHandler} placeholder={placeholder} value={value} required />
      </div >
   )
}