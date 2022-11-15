export const Button = ({ className, textButton, action, dataProduct }) => {

   const clickHandler = () => {
      action(dataProduct)
   }
   return <button className={className} onClick={clickHandler}>{textButton}</button>
}



