import { useNavigate } from "react-router-dom"

export const ButtonBack = ({ text, className }) => {

   const navigate = useNavigate()
   const goBack = () => navigate(-1)

   return <button className={className} onClick={goBack}>{text}</button>
}