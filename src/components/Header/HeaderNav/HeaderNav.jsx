import { NavItem } from "./NavItem";
import { ABOUT, CONTACT, CATEGORIES, ALLPRODUCTS } from "../../../constants/constants"
import style from "./HeaderNav.module.scss";
import { observer } from "mobx-react-lite";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import { DropdownItem } from "../../shared/Dropdown/DropdownItem/DropdownItem";

export const HeaderNav = observer(({ burgerActive, closeMenu, allPoductsStore }) => {

   const { visible, setVisible } = allPoductsStore

   const openCloseItem = () => {
      setVisible(!visible)
   }

   return (
      <nav className={burgerActive ? `${style.nav} ${style.active}` : style.nav} >
         <ul className={style.item}>
            <NavItem
               link="/"
               textLink="Home"
               closeMenu={closeMenu}
               setVisible={setVisible}
               visible={visible}
            />
            <NavItem
               link={`/${ABOUT}`}
               textLink="About us"
               closeMenu={closeMenu}
               setVisible={setVisible}
            />
            <NavItem
               link={`/${CATEGORIES}`}
               textLink="Shop"
               closeMenu={closeMenu}
               textButton={<i className="fa fa-angle-down" aria-hidden="true"></i>}
               openCloseItem={openCloseItem}
               setVisible={setVisible}
               visible={visible}
            >
               {visible &&
                  <Dropdown>
                     <DropdownItem
                        link={`/${ALLPRODUCTS}`}
                        textLink="all products"
                        setVisible={setVisible}
                        closeMenu={closeMenu}
                     />
                  </Dropdown>
               }
            </NavItem>
            <NavItem
               link={`/${CONTACT}`}
               textLink="Contact us"
               closeMenu={closeMenu}
               setVisible={setVisible}
            />
         </ul>
      </nav>
   )
})


