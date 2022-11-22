import { Button } from "../../../components/shared/Buttons/Button";
import { Link } from "react-router-dom";
export const CartEmpty = ({ text }) => {
   return (
      <div className="cart__empty">
         {text}
         <Link to="/categories">
            <Button
               className="cart__empty-btn button"
               textButton="go shop"
            />
         </Link>
      </div>
   )
}