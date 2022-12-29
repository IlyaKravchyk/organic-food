import { ButtonForm } from "../../Buttons/ButtonForm";
import style from "./Form.module.scss";

export const Form = ({ buttonName, children, sumbitHandler, isActive = null }) => {

   return (
      <>
         {!isActive &&
            <form className="form" action="#" onSubmit={sumbitHandler}>
               <div className={style.formItems}>
                  {children}
               </div>
               <ButtonForm className="form__button button">
                  {buttonName}
               </ButtonForm>
            </form>}
         {isActive && <div className="loader"></div>}
      </>
   )
}