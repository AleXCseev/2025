import { Routes, Route } from "react-router"

import { BgLight } from "./components"
import { MainPage } from "./pages"

export const App = () => {

  const lights = [
    "top-40 -left-10 w-64 h-64 bg-radial-(--gradient-bg-light-1)",
    "top-60 -right-10 bg-radial-(--gradient-bg-light-2)",
    "bottom-20 -left-10 bg-radial-(--gradient-bg-light-3)",
    "bottom-40 -right-10 bg-radial-(--gradient-bg-light-4)"
  ]

  return (
    <div className="relative h-screen overflow-hidden">
      {
        lights.map((light, idx) => {
          return <BgLight key={idx} className={light}/>
        })
      }
      <div className="relative h-screen z-10 flex flex-col justify-between bg-[url(./assets/img/court.png)] bg-repeat bg-center bg-[65%_auto]">
        <Routes>
          <Route index element={<MainPage />} />
        </Routes>
      </div>
    </div>
  )
}
