import { useState } from "react";
import { Form } from "../../../../components/shared/Form/Form";
import { FormItem } from "../../../../components/shared/Form/FormItem";
import { Modal } from "../../../../components/shared/Modal/Modal";

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
      <Modal className="modal__delivery" state={isModalDeliveryOpen} setState={setIsModalDeliveryOpen}>
         <h2 className="modal__title"> Contact details </h2>
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
      </Modal>
   )
}