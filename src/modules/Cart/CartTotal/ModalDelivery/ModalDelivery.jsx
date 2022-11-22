import { useState } from "react";
import { Form } from "../../../../components/shared/Form/Form";
import { FormItem } from "../../../../components/shared/Form/FormItem";

export const ModalDelivery = ({ isModalDeliveryOpen, setIsModalDeliveryOpen }) => {

   const [name, setName] = useState('')
   const [phone, setPhone] = useState('')
   const [address, setAddress] = useState('')

   const clearAndClose = (event) => {
      event.preventDefault()
      setIsModalDeliveryOpen(false)
      setName('')
      setPhone('')
      setAddress('')
   }

   return (
      <div className={isModalDeliveryOpen ? "modal__delivery active" : "modal__delivery"} onClick={() => { setIsModalDeliveryOpen(false) }}>
         <div className={isModalDeliveryOpen ? "modal__delivery-wrapper active" : "modal__delivery-wrapper"} onClick={e => e.stopPropagation()} >
            <h2 className="modal__delivery-title"> Contact details </h2>
            <Form buttonName="confirm" sumbitHandler={clearAndClose}>
               <FormItem
                  type="text"
                  value={name}
                  setValue={setName}
                  placeholder="your name"
                  text="name:" />

               <FormItem
                  type="tel"
                  value={phone}
                  setValue={setPhone}
                  placeholder="phone"
                  text="phone:"
               />

               <FormItem
                  type="text"
                  value={address}
                  setValue={setAddress}
                  placeholder="address"
                  text="address:"
               />

            </Form>
            <span className="modal__btn-out" onClick={() => setIsModalDeliveryOpen(false)}>
               <i className="fa fa-times" aria-hidden="true"></i>
            </span>
         </div>
      </div >
   )
}