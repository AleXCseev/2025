import { useState, useEffect } from 'react'
import cn from 'classnames'

export const BgLight = ({ className }) => {
    const [light, setLight] = useState()

  function moveRandomlyWithTransform(step) {
    const distance = Math.floor(Math.random() * 51) + step;
    const angle = Math.random() * 360;
    const deltaX = Math.cos(angle * Math.PI / 180) * distance;
    const deltaY = Math.sin(angle * Math.PI / 180) * distance;
  
    return {
      transform: `translate(${deltaX}px, ${deltaY}px)`
    }
  }

  let interval;

  useEffect(() => {
    interval = setInterval(() =>{
      setLight(() => moveRandomlyWithTransform(20))
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  })
    return (
        <div style={light} className={cn('rounded-full bg-repeat bg-center bg-cover w-52 h-52 absolute transition ease-in duration-3000', className)}></div>
    )
}