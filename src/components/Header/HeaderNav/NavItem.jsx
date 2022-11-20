import { NavLink } from "react-router-dom"

export const NavItem = ({ link, cheldren }) => {
    return (
        <li className="nav__item">
            <NavLink className="nav__link" to={link}>{cheldren}</NavLink >
        </li >
    )
}