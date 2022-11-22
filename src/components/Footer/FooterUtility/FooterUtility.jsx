import { FooterUtilityPage } from "./FooterUtilityPage/FooterUtilityPage"

export const FooterUtility = () => {
   return (
      <div className="footer__item utility">
         <h2 className="footer__title ">utility pages</h2>
         <div className="footer__pages">
            <FooterUtilityPage
               linkPage="#"
               text="style guide"
            />

            <FooterUtilityPage
               linkPage="#"
               text="protected"
            />


            <FooterUtilityPage
               linkPage="#"
               text="page not found"
            />

            <FooterUtilityPage
               linkPage="#"
               text="changelog"
            />

            <FooterUtilityPage
               linkPage="#"
               text="licenses"
            />

         </div>
      </div >
   )
}