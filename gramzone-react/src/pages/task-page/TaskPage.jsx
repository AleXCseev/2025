import { useEffect } from "react"
import { Navigation, Button, Header, Character } from "../../components"
import addIcon from "../../assets/img/add-user-icon.svg"
import { useCharacterStore } from "../../stores/characterStore"

export const TaskPage = () => {
    const name = useCharacterStore((state) => state.name)

    return (
        <>
           <Header>
                <div className="relative">
                    <Button>
                        <img src={addIcon} alt="icon" />
                    </Button>
                    <Character variant="small" name={name} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                </div>
            </Header>
            <Navigation/>
        </>
    )
}