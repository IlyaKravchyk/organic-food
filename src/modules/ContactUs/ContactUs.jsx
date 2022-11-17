import { ContactComponent } from "../../components/ContactUs/ContactComponent";

import { Image } from "antd";
import "./contact.css";
import { ButtonForm } from "../../components/shared/Buttons/ButtonForm";


export const ContactUs = () => {
   return (
      <div className="container">
         <div className="contact__wrapper">
            <div className="contact__items">
               <div className="contact__item">
                  <div className="contact__image">
                     <Image src="https://i.ibb.co/cx7BKM1/contact-image.png" alt="image" />
                  </div>
               </div>
               <div className="contact__item">
                  <ContactComponent
                     classWrapper="contact__container"
                     classTitle="contact__title"
                     classInfo="contact__info"
                     classSubtitle="contact__subtitle"
                  />
               </div>
            </div>
            <div className="contact__form">
               <form action="#" className="form">
                  <div className="form__items">
                     <div className="contact__form-wrapper">
                        <div className="form__item">
                           <span className="form__name">full name*</span>
                           <input className="form__input" type="text" required placeholder="your name" />
                        </div>
                        <div className="form__item">
                           <span className="form__name">email adrdress*</span>
                           <input className="form__input" type="email" required placeholder="your email" />
                        </div>
                     </div>
                     <div className="contact__form-wrapper">
                        <div className="form__item">
                           <span className="form__name">company*</span>
                           <input className="form__input" type="text" required placeholder="our company name" />
                        </div>
                        <div className="form__item">
                           <span className="form__name">subject</span>
                           <input className="form__input" type="text" placeholder="how we can help" />
                        </div>
                     </div>
                  </div>
                  <div className="form__message">
                     <div className="form__name">message</div>
                     <textarea className="form__input form__textarea" placeholder="hello there..."></textarea>
                  </div>
                  <div className="form__button">
                     <ButtonForm className="form__btn button">
                        send
                     </ButtonForm>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}


//пересмотреть
/*import { ContactComponent } from "../../components/ContactUs/ContactComponent";
import { FormItem } from "../../components/shared/Form/FormItem";
import { Form } from "../../components/shared/Form/Form";
import { useRef } from "react";
import { Image } from "antd";
import "./contact.css";

export const ContactUs = () => {

   const [name, setName] = useRef('');
   const [mail, setMail] = useRef('');
   const [company, setCompany] = useRef('');
   const [subject, setSubject] = useRef('');
   const [message, setMessage] = useRef('');

   const clearForm = (event) => {
      event.preventDefault()
      setName('')
      setMail('')
      setCompany('')
      setSubject('')
      setMessage('')
   }

   const changeHandlerMessage = (event) => {
      setMessage(event.target.value)
   }

   return (
      <div className="container">
         <div className="contact__wrapper">
            <div className="contact__items">
               <div className="contact__item">
                  <div className="contact__image">
                     <Image src="https://i.ibb.co/cx7BKM1/contact-image.png" alt="image" />
                  </div>
               </div>
               <div className="contact__item">
                  <ContactComponent
                     classWrapper="contact__container"
                     classTitle="contact__title"
                     classInfo="contact__info"
                     classSubtitle="contact__subtitle"
                  />
               </div>
            </div>
            <div className="contact__form">
               <Form buttonName="send" sumbitHandler={clearForm}>
                  <div className="contact__form-wrapper">
                     <FormItem type="text" placeholder="your name" value={name} setValue={setName}>
                        full name:
                     </FormItem>
                     <FormItem type="email" placeholder="your email" value={mail} setValue={setMail}>
                        email adrdress:
                     </FormItem>
                  </div>
                  <div className="contact__form-wrapper">
                     <FormItem type="text" placeholder="our company name" value={company} setValue={setCompany}>
                        company:
                     </FormItem>
                     <FormItem type="text" placeholder="how we can help" value={subject} setValue={setSubject}>
                        subjec:
                     </FormItem>
                  </div>
                  <div className="form__message">
                     <div className="form__name">message</div>
                     <textarea className="form__input form__textarea" placeholder="hello there..." value={message} onChange={changeHandlerMessage}></textarea>
                  </div>
               </Form>
            </div>
         </div>
      </div>
   )
}*/