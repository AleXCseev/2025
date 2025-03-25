import { NavLink } from "react-router"
import cn from "classnames"


export const NavItem = ({ icon, className }) => {
    return (
        <NavLink className={cn( "", className)}>
            <img src={icon} alt="nav-icon" className="w-8 h-auto" />
        </NavLink>
    )
}