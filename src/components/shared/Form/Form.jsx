import { ButtonForm } from "../Buttons/ButtonForm"

export const Form = ({ buttonName, children, sumbitHandler, isActive = null }) => {

   return (
      <>
         {!isActive &&
            <form className="form" action="#" onSubmit={sumbitHandler}>
               <div className="form__items">
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