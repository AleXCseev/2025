import cn from 'classnames'

export const Button = ({ variant="default", className, children }) => {
    const btnVariants = {
        default: '',
        rounded: 'rounded-full w-auto h-auto p-4'
    }
    return (
        <button className={
            cn(
                "rounded-[20px] cursor-pointer w-16 h-16 flex justify-center items-center bg-(--color-item-bg) border-2 border-(--color-border)", 
                btnVariants[variant], 
                className
                )}>
            {children}
        </button>
    )
}