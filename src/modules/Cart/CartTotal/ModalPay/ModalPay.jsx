import { useState } from "react"
import { Form } from "../../../../components/shared/Form/Form"
import { FormItem } from "../../../../components/shared/Form/FormItem"

export const ModalPay = ({ isModalPayOpen, setIsModalPayOpen }) => {

   const [cartNumber, setCartNumber] = useState();
   const [name, setName] = useState();
   const [cartData, setCartData] = useState();
   const [cvcCode, setCvcCode] = useState();

   const clearAndClose = (event) => {
      setIsModalPayOpen(false)
      event.preventDefault()
      setCartNumber('')
      setName('')
      setCartData('')
      setCvcCode('')
   }

   return (
      <div className={isModalPayOpen ? "modal__pay active" : "modal__pay"} onClick={() => { setIsModalPayOpen(false) }}>
         <div className={isModalPayOpen ? "modal__pay-wrapper active" : "modal__pay-wrapper"} onClick={e => e.stopPropagation()} >
            <Form buttonName="pay" sumbitHandler={clearAndClose}>
               <FormItem
                  type="tel"
                  value={cartNumber}
                  setValue={setCartNumber}
                  placeholder="0000 0000 0000 0000"
                  text="cart number:"
               />

               <FormItem
                  type="text"
                  value={name}
                  setValue={setName}
                  placeholder="enter your name"
                  text="holde name:"
               />

               <FormItem type="tel"
                  value={cartData}
                  setValue={setCartData}
                  placeholder="mm/yy"
                  text="Validity:"
               />

               <FormItem
                  type="tel"
                  value={cvcCode}
                  setValue={setCvcCode}
                  placeholder="489"
                  text="code cvc2:"
               />

            </Form>
            <span className="modal__btn-out" onClick={() => setIsModalPayOpen(false)}>
               <i className="fa fa-times" aria-hidden="true"></i>
            </span>
         </div>
      </div >
   )
}