import { Slot } from 'expo-router'
import '../styles/global.css'
import { BagProvider } from './components/contextBag'

export default function Layout() {
    return (
        <BagProvider>
            <Slot />
        </BagProvider>
    )
}