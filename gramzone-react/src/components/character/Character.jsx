import { useEffect } from 'react'
import cn from "classnames"
import { CHARACTERS } from "../../constants"
import { useCharacterStore } from "../../stores/characterStore"

const charactersVariant = {
    big: "w-58",
    small: "w-24"
}

export const Character = ({ color = "blue", variant = "big", name = "", className}) => {
    const changeSize = useCharacterStore((state) => state.changeSize)

    useEffect(() => {
        if(variant === "small") {
            changeSize(false)
        } else {
            changeSize(true)
        }
    })

    const shadow = variant === "big" ? CHARACTERS[color].shadow : CHARACTERS[color].shadowSmall

    return (
        <div className={cn("flex flex-col justify-normal items-center", className)}>
            { 
                name && <p className="relative z-10 font-haval text-(color:--color-white) text-base text-center mb-2">{name}</p> 
            }
            <img 
                className={cn("rounded-full h-auto block", shadow, charactersVariant[variant])}
                src={CHARACTERS[color].img} 
                alt="character" 
            />
        </div>
       
    )
}