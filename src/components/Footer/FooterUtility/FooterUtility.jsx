import { FooterUtilityPage } from "./FooterUtilityPage";
import style from "./FooterUtility.module.scss"

export const FooterUtility = () => {
   return (
      <div className={style.utility}>
         <h2 className={style.title}>utility pages</h2>
         <div className={style.pages}>
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