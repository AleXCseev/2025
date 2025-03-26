import { Link, useMatch } from "react-router"
import cn from "classnames"

export const NavItem = ({ path, icon, className }) => {
    const match = useMatch(path)

    return (
        <Link to={path} className={cn("relative", className)}>
            <div className={cn('absolute w-[90px] h-[70px] z-10 -top-5 -left-7 bg-[url(./assets/img/nav/active-bg.svg)] opacity-0 bg-center bg-cover transition ease-in duration-300', {"opacity-100": match})}></div>
            <img src={icon} alt="nav-icon" className="w-8 h-auto relative z-10" />
        </Link>
    )
}