import { Outlet } from "react-router-dom"
import { Footer } from "../../components/Footer/Foorter"
import { Header } from "../../components/Header/Header"

export const Layout = () => {
   return (
      <>
         <Header />
         <div className="main">
               <Outlet />
         </div>
         <Footer />
      </>
   )
}