import { useState } from "react";
import { Form } from "../../../../components/shared/Form/Form";
import { FormItem } from "../../../../components/shared/Form/FormItem";
import { Modal } from "../../../../components/shared/Modal/Modal";

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
      <Modal className="modal__pay" state={isModalPayOpen} setState={setIsModalPayOpen}>
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
      </Modal>
   )
}