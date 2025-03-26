import { Header, Button, Navigation, Wrapper, MainTitle, Character } from "../../components"
import addIcon from "../../assets/img/add-user-icon.svg"
import chatIcon from "../../assets/img/chat-icon.svg"
import tonIcon from "../../assets/img/ton-icon.png"

export const HomePage = () => {
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
        <Wrapper className="h-full flex grow srink basis-full justify-around flex-col items-center overflow-y-auto">
          <MainTitle className="">
            gramzone
          </MainTitle>
          <Character/>
          <Button variant="rounded" className="pt-4 pb-2 pl-12 pr-12">
            <span className="font-haval text-(color:--color-white) uppercase text-3xl">Грати</span>
          </Button>
        </Wrapper>
        <Navigation/>
      </>
       
    )
}