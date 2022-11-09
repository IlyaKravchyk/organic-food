export const Button = ({ className, textButton, action, dataProduct }) => {


   return <>
      <button className={className} onClick={() => (action(dataProduct))}>{textButton}</button>
   </>

} 