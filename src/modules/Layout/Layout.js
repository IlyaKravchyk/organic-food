import { Outlet } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

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