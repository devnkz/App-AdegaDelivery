import { Pressable, Text, View } from 'react-native';

export function ButtonPay({ valorItem }) {
    return (
        <View className='w-full items-center absolute bottom-6 h-24 z-10'>
            <Pressable className='bg-black w-4/5 flex items-center justify-center h-full rounded-3xl'>
                <Text className='text-white text-2xl'>Finalizar compra R$ {valorItem} </Text>
            </Pressable>
        </View>
    )
}