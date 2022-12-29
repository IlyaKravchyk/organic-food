import style from "./MainTitle.module.scss"

export const MainTitle = ({ titleText }) => {
   return (
      <h1 className={style.title}>{titleText}</h1>
   )
}   