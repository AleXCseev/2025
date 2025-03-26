import userIcon from "./assets/img/nav/user-icon.svg"
import bagIcon from "./assets/img/nav/bag-icon.svg"
import homeIcon from "./assets/img/nav/home-icon.svg"
import statIcon from "./assets/img/nav/stat-icon.svg"
import clipboardIcon from "./assets/img/nav/clipboard-icon.svg"
import characterBlue from "./assets/img/characters/blue.png"

export const PATHS = {
    "user": "user",
    "shop": "shop",
    "home": "/",
    "statistic": "statistic",
    "task": "task",
}

export const NAV_LINKS = [
    {
        path: PATHS["user"],
        icon: userIcon,
    },
    {
        path: PATHS["shop"],
        icon: bagIcon,
    },
    {
        path: PATHS["home"],
        icon: homeIcon,
    },
    {
        path: PATHS["statistic"],
        icon: statIcon,
    },
    {
        path: PATHS["task"],
        icon: clipboardIcon,
    },
]

export const CHARACTERS = {
    "blue": {
        img: characterBlue,
        shadow: 'shadow-[5px_5px_150px_0_#6822d9]',
        shadowSmall: 'shadow-[5px_5px_100px_0_#6822d9]',
        light: '--gradient-character-blue',
    
    }
}