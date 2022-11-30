import { ContactComponent } from "../../components/ContactUs/ContactComponent";
import { Form } from "../../components/shared/Form/Form";
import { FormItem } from "../../components/shared/Form/FormItem";
import { Image } from "antd";
import { useState } from "react";
import { MainTitle } from "../../components/shared/MainTitle"
import "./contact.css";
import "./ContactMedia.css";

export const ContactUs = () => {

   const [name, setName] = useState('');
   const [mail, setMail] = useState('');
   const [company, setCompany] = useState('');
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');
   const [isActive, setIsActive] = useState(false)

   const clearForm = (event) => {
      setIsActive(true)
      event.preventDefault();
      setName('')
      setMail('')
      setCompany('')
      setSubject('')
      setMessage('')
      setTimeout(() => { setIsActive(false) }, 1000)
   }
   const updateTextAreaValue = (event) => {
      setMessage(event.target.value)
   }

   return (
      <div className="container">
         <div className="contact__wrapper">
            <MainTitle
               className="contact__title title"
               titleText="Contactn us"
            />
            <div className="contact__items">
               <div className="contact__item">
                  <div className="contact__image">
                     <Image src="https://i.ibb.co/cx7BKM1/contact-image.png" alt="image" />
                  </div>
               </div>
               <div className="contact__item">
                  <ContactComponent
                     classWrapperComponents="contacts__iformation"
                     classWrapperInfo="contact__container"
                     classTitle="contact__block-title"
                     classInfo="contact__info"
                     classSubtitle="contact__subtitle"
                  />
               </div>
            </div>

            <Form buttonName="send" sumbitHandler={clearForm} isActive={isActive} >
               <div className="contact__form-wrapper">
                  <FormItem
                     type="text"
                     placeholder="your name"
                     value={name}
                     setValue={setName}
                     text="name:"
                  />

                  <FormItem
                     type="email"
                     placeholder="adrdress"
                     value={mail}
                     setValue={setMail}
                     text="adrdress:"
                  />
               </div>
               <div className="contact__form-wrapper">
                  <FormItem
                     type="text"
                     placeholder="our company name"
                     value={company}
                     setValue={setCompany}
                     text="company:"
                  />

                  <FormItem
                     type="text"
                     placeholder="how we can help"
                     value={subject}
                     setValue={setSubject}
                     text="subject:"
                  />
               </div>
               <div className="form__message">
                  <div className="form__name">message:</div>
                  <textarea className="form__input form__textarea" placeholder="hello there..." value={message} onChange={updateTextAreaValue}></textarea>
               </div>
            </Form>
         </div>
      </div>

   )

}