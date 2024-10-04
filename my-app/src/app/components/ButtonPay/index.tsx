import { Pressable, Text } from 'react-native';

export function ButtonPay() {
    return (
            <Pressable className='bg-black flex items-center justify-center h-24 p-3'>
                <Text className='text-white text-2xl'>Finalizar compra R$ 45,89</Text>
            </Pressable>
    )
}