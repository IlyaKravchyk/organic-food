import { Button } from "../../../components/Button/Button"

export const ModalPay = ({ isModalPayOpen, setIsModalPayOpen }) => {
   return (
      <div className={isModalPayOpen ? "modal__pay active" : "modal__pay"} onClick={() => { setIsModalPayOpen(false) }}>
         <div className={isModalPayOpen ? "modal__pay-wrapper active" : "modal__pay-wrapper"} onClick={e => e.stopPropagation()} >
            <form className="modal__form" action="#">
               <h2 className="modal__pay-title">
                  card payment
               </h2>
               <div className="modal__pay-items">
                  <div className="modal__pay-item">
                     <span className="modal__input-title">cart number:</span>
                     <input className="modal__input" type="tel" placeholder="0000 0000 0000 0000" required />
                  </div>
                  <div className="modal__pay-item">
                     <span className="modal__input-title">holde name:</span>
                     <input className="modal__input" type="text" placeholder="enter your name" required />
                  </div>
                  <div className="modal__pay-item">
                     <span className="modal__input-title">Validity:</span>
                     <input className="modal__input" type="tel" placeholder="mm/yy" required />
                  </div>
                  <div className="modal__pay-item">
                     <span className="modal__input-title"> code cvc2:</span>
                     <input className="modal__input" type="tel" placeholder="111" required />
                  </div>
               </div>
               <Button
                  className="modal__button button"
                  textButton="pay"
               />
            </form>
            <span className="modal__btn-out" onClick={() => setIsModalPayOpen(false)}>
               <i className="fa fa-times" aria-hidden="true"></i>
            </span>
         </div>
      </div >
   )
}