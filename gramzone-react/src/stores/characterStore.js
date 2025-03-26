import { create } from 'zustand'

const initialStore = "blue"

export const useCharacterStore = create((set, get) => ({
    character: initialStore,
    name: 'Nickname',
    isBig: true,
    changeCharacter: () => set((state) => ({character: state.character})),
    changeSize: (isBig) => set({isBig: isBig}),
}))