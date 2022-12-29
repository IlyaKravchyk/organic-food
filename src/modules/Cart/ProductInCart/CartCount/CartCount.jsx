import { Button } from "../../../../components/shared/Buttons/Button"
import style from "./CartCount.module.scss"

export const CartCount = ({ count, countUp, countDown, productId }) => {

   return (
      <div className={style.count}>
         <Button
            className={style.countDown}
            textButton={<i className="fa fa-minus" aria-hidden="true"></i>}
            action={countDown}
            dataProduct={productId}
         />
         <span className={style.number}>{count}</span>
         <Button
            className={style.countUp}
            textButton={<i className="fa fa-plus" aria-hidden="true"></i>}
            action={countUp}
            dataProduct={productId}
         />
      </div>
   )
}