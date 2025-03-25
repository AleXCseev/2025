import { Wrapper } from "../../components"

export const Header = ({children}) => {
    return (
        <header className="pt-30 pl-3 pr-3 pb-11 bg-linear-(--header-gradient)">
            <Wrapper>
                {children}
            </Wrapper>
        </header>
    )
}