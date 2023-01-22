import { Outlet } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import allPoductsStore from "../Shop/AllPoducts/AllPoductsStore/AllPoductsStore"

export const Layout = () => {

   const { setVisible } = allPoductsStore
   const handlerClick = () => { setVisible(false) }

   return (
      <div className="wrapper" onClick={handlerClick}>
         <Header
            allPoductsStore={allPoductsStore}
         />
         <div className="main">
            <Outlet />
         </div>
         <Footer />
      </div>
   )
}