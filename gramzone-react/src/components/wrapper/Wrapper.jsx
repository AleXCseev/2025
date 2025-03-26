import cn from "classnames"

export const Wrapper = ({ children, className }) => {
    return (
        <div className={cn("pl-4 pr-4", className)}>
            {children}
        </div>
    )
}