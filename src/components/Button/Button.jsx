export const Button = ({ className, textButton, action, dataProduct }) =>
   <button className={className} onClick={() => (action(dataProduct))}>{textButton}</button>


