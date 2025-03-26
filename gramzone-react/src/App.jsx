import { Routes, Route, useMatch } from "react-router"
import { BgLight } from "./components"
import { HomePage, TaskPage, UserPage } from "./pages"
import { CHARACTERS, PATHS } from "./constants"
import { useCharacterStore } from "./stores/characterStore"
import { useState, useEffect } from "react"

export const App = () => {
  const [gradient, setGradient] = useState("")
  const homePage = useMatch(PATHS["home"])
  const character = useCharacterStore((state) => state.character)
  const isBig = useCharacterStore((state) => state.isBig)

  useEffect(() => {
    setGradient(CHARACTERS[character].light)
  })

  const lights = [
    "top-40 -left-10 w-64 h-64 bg-radial-(--gradient-bg-light-1)",
    "top-60 -right-10 w-52 h-52 bg-radial-(--gradient-bg-light-2)",
    "bottom-20 -left-10 w-52 h-52 bg-radial-(--gradient-bg-light-3)",
    "bottom-40 -right-10 w-52 h-52 bg-radial-(--gradient-bg-light-4)"
  ]

  return (
    <div className="relative h-screen overflow-hidden">
      {
        homePage && lights.map((light, idx) => {
          return <BgLight key={idx} className={light}/>
        })
      }
      {
        isBig ?
        <BgLight noAnimate className={`w-90 h-90 mt-8 top-1/2 left-1/2 animate-pulse bg-radial-(${gradient})`}/> :
        <BgLight noAnimate className={`w-50 h-50 top-[15%] left-1/2 animate-pulse bg-radial-(${gradient})`}/>
      }
      <div className="relative h-screen z-10 flex flex-col justify-between bg-[url(./assets/img/court.png)] bg-repeat bg-center bg-[65%_auto]">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={PATHS["user"]} element={<UserPage />} />
          <Route path={PATHS["task"]} element={<TaskPage />} />
        </Routes>
      </div>
    </div>
  )
}
