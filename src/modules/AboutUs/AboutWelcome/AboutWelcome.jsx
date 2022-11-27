export const AboutWelcome = ({ title, subtitle }) => {
   return (

      <div className="about__welcome">
         <div className="about__welcome-title">
            {title}
         </div>
         <div className="about__welcome-subtitle">
            {subtitle}
         </div>
      </div>

   )
}