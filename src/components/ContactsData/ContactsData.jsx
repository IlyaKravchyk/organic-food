import { ItemContact } from "./ItemContact/ItemContact";
export const ContactsData = ({ wrapper, title, item }) => {
   return (
      <div className={wrapper}>
         <h2 className={title}>
            Our contacts
         </h2>
         <div className={item}>
            <ItemContact
               subtitleDescription="Email"
               link="mailto:needhelp@organick.com"
               linkDescription="needhelp@organick.com"
            />
            <ItemContact
               subtitleDescription="Phone"
               link="tel:80291234567"
               linkDescription="80291234567"
            />
            <ItemContact
               subtitleDescription="address"
               link="https://yandex.by/maps/?ll=-75.369402%2C52.216963&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyMjQwMTc4NzQ0EhhVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EiCg1UO8bCFcnPE0I%3D&z=2.81"
               linkDescription="88 Road, Brooklyn Street, USA"
            />
         </div>
      </div>
   )
}