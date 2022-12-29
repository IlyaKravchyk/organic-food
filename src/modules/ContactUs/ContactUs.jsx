import { ContactComponent } from "../../components/ContactUs/ContactComponent";
import { Form } from "../../components/shared/Form/Form";
import { FormItem } from "../../components/shared/Form/FormItem";
import { Image } from "antd";
import { useState } from "react";
import { MainTitle } from "../../components/shared/MainTitle"
import style from "./ContactUs.module.scss"
import { ContactsData } from "../../components/ContactsData/ContactsData";

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
         <div className={style.contact}>
            <MainTitle
               titleText="Contactn us"
            />
            <div className={style.items}>
               <div className={style.item}>
                  <div className={style.image}>
                     <Image src="https://i.ibb.co/cx7BKM1/contact-image.png" alt="image" />
                  </div>
               </div>
               <div className={style.item}>
                  <ContactsData
                     wrapper={style.wrapper}
                     title={style.title}
                     item={style.info}
                  />
               </div>
            </div>

            <Form buttonName="send" classForm={style.formChildren} sumbitHandler={clearForm} isActive={isActive} >
               <div className={style.formWrapper}>
                  <FormItem
                     classForm="formItems"
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
               <div className={style.formWrapper}>
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
               <div className={style.message}>
                  <div className={style.formName}>message:</div>
                  <textarea
                     className={style.textarea}
                     placeholder="Write to us ..."
                     value={message}
                     onChange={updateTextAreaValue}>
                  </textarea>
               </div>
            </Form>
         </div>
      </div>

   )

}