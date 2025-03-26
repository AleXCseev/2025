import { Header, Button, Navigation } from "../../components"
import addIcon from "../../assets/img/add-user-icon.svg"
import chatIcon from "../../assets/img/chat-icon.svg"
import tonIcon from "../../assets/img/ton-icon.png"

export const UserPage = () => {
    return (
      <>
       <Header>
          <div className="flex justify-between items-center">
            <Button>
              <img src={addIcon} alt="icon" />
            </Button>
            <Button variant="rounded" className="pt-2 pb-2">
              <img src={tonIcon} alt="icon" className="mr-2"/>
              <span className="font-haval text-(color:--color-white) uppercase text-xs">О токене</span>
            </Button>
            <Button>
              <img src={chatIcon} alt="icon" />
            </Button>
          </div>
        </Header>
        <Navigation/>
      </>
       
    )
}