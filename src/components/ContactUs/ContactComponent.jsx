import { ItemContactComponent } from "./ItemContactComponent"

export const ContactComponent = ({ classWrapper, classTitle, classInfo, classSubtitle }) => {
   return (
      <div className={classWrapper}>
         <h2 className={classTitle}>
            contact us
         </h2>
         <ItemContactComponent
            classInfo={classInfo}
            classSubtitle={classSubtitle}
            subtitleDescription="Email"
            link="mailto:needhelp@organick.com"
            linkDescription="needhelp@organick.com"
         />
         <ItemContactComponent
            classInfo={classInfo}
            classSubtitle={classSubtitle}
            subtitleDescription="Phone"
            link="tel:80291234567"
            linkDescription="80291234567"
         />
         <ItemContactComponent
            classInfo={classInfo}
            classSubtitle={classSubtitle}
            subtitleDescription="address"
            link="https://yandex.by/maps/?ll=-75.369402%2C52.216963&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyMjQwMTc4NzQ0EhhVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EiCg1UO8bCFcnPE0I%3D&z=2.81"
            linkDescription="88 Road, Brooklyn Street, USA"
         />
      </div>
   )
}