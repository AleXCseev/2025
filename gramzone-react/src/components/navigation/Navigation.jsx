import { NavItem } from "../nav-item/NavItem"
import { Wrapper } from "../index"
import { NAV_LINKS } from "../../constants"



export const Navigation = () => {
    return (
        <Wrapper className="pb-10 shrink-0">
            <div className="flex p-8 justify-between items-center rounded-full bg-(--color-item-bg) border-2 border-(--color-border)">
                {
                    NAV_LINKS.map((link) => {
                        return <NavItem key={link.path} path={link.path} icon={link.icon} />
                    })
                }
            </div>
        </Wrapper>
    )
}