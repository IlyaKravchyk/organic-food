export const FooterContacts = () => {
   return (
      <div className="footer__item contacts">
         <h2 className="footer__title">
            contact us
         </h2>
         <div className="footer__info">
            <p className="footer__subtitle">Email</p>
            <a href="mailto:needhelp@organick.com" target="_blanc">
               needhelp@organick.com
            </a>
         </div>
         <div className="footer__info">
            <p className="footer__subtitle">Phone</p>
            <a href="tel:80291234567">
               80291234567
            </a>
         </div>
         <div className="footer__info">
            <p className="footer__subtitle">address</p>
            <a href="https://yandex.by/maps/?ll=-75.369402%2C52.216963&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyMjQwMTc4NzQ0EhhVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EiCg1UO8bCFcnPE0I%3D&z=2.81" target="_blanc">
               88 Road, Brooklyn Street, USA
            </a>
         </div>
      </div>
   )
}