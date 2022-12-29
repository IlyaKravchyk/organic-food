import { useNavigate } from "react-router-dom"

export const ButtonBack = ({ text = "go to back", className }) => {

   const navigate = useNavigate()
   const goBack = () => navigate(-1)

   return <button className={className} onClick={goBack}>{text}</button>
}