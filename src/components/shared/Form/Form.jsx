import { ButtonForm } from "../Buttons/ButtonForm"

export const Form = ({ buttonName, children, sumbitHandler }) => {

   return (
      <form className="form" action="#" onSubmit={sumbitHandler}>
         <div className="form__items">
            {children}
         </div>
         <ButtonForm className="form__button button">
            {buttonName}
         </ButtonForm>
      </form>
   )
}