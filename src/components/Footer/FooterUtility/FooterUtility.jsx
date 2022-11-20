import { FooterUtilityPage } from "./FooterUtilityPage"

export const FooterUtility = () => {
   return (
      <div className="footer__item utility">
         <h2 className="footer__title ">utility pages</h2>
         <div className="footer__pages">
            <FooterUtilityPage linkPage="#">
               style guide
            </FooterUtilityPage>

            <FooterUtilityPage linkPage="#">
               protected
            </FooterUtilityPage>

            <FooterUtilityPage linkPage="#">
               page not found
            </FooterUtilityPage>

            <FooterUtilityPage linkPage="#">
               changelog
            </FooterUtilityPage>

            <FooterUtilityPage linkPage="#">
               licenses
            </FooterUtilityPage>
         </div>
      </div>
   )
}