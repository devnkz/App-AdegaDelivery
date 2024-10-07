import { Pressable, Text } from "react-native"
import { useBag } from "../contextBag"
import { Feather } from "@expo/vector-icons";

export function ButtonRemoveItem({removeItem}) {

    const { clearCart } = useBag();
    
    return (
        <Pressable onPress={removeItem} onPressIn={clearCart} className="bg-red-500 items-center p-2 rounded-lg mt-2 w-24">
            <Feather name={'trash'} size={24} color={'white'}/>
        </Pressable>
    )
}