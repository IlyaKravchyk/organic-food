import { Button } from "../../../components/Button/Button"
import { useRef } from "react";

export const ModalDelivery = ({ isModalDeliveryOpen, setIsModalDeliveryOpen }) => {


   return (
      <div className={isModalDeliveryOpen ? "modal__delivery active" : "modal__delivery"} onClick={() => { setIsModalDeliveryOpen(false) }}>
         <div className={isModalDeliveryOpen ? "modal__delivery-wrapper active" : "modal__delivery-wrapper"} onClick={e => e.stopPropagation()} >
            <h2 className="modal__delivery-title"> Contact details </h2>
            <form className="modal__form" action="#" >
               <div className="modal__items">
                  <div className="modal__item">
                     <input className="modal__input" type="text" placeholder="your name" required />
                  </div>
                  <div className="modal__item">
                     <input className="modal__input" type="tel" placeholder="your phone" required />
                  </div>
                  <div className="modal__item">
                     <input className="modal__input" type="text" placeholder="your address" required />
                  </div>
               </div>
               <Button
                  className="modal__button button"
                  textButton="confirm"
               />
            </form>
            <span className="modal__btn-out" onClick={() => setIsModalDeliveryOpen(false)}>
               <i className="fa fa-times" aria-hidden="true"></i>
            </span>
         </div>
      </div >
   )
}