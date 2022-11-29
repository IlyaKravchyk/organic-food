import { Link } from "react-router-dom";
import { CATEGORIES } from "../../../constants/constants"

export const ButtonGoShop = ({ text }) => {
   return (
      <Link to={`/${CATEGORIES}`}>
         <button className="button__shop button">{text}</button>
      </Link>
   )
}