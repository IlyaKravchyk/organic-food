export const Item = ({ classInfo, classSubtitle, subtitleDescription, link, linkDescription }) => {
   return (
      <div className={classInfo}>
         <p className={classSubtitle}>{subtitleDescription}</p>
         <a href={link} target="_blanc">
            {linkDescription}
         </a>
      </div>
   )
}