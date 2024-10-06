import { Pressable, Text, View } from 'react-native';

export function ButtonPay({ valorItem }) {
    return (
        <View className='w-full items-center absolute bottom-6 h-24 z-10'>
            <Pressable style={{elevation: 10}} onPress={() => alert('Compra realizada')} className='bg-black w-4/5 flex items-center justify-center h-full rounded-3xl'>
                <Text className='text-white text-2xl font-light'> Comprar <Text className='text-green-600 font-bold text-2xl'>R$ {valorItem}</Text></Text>
            </Pressable>
        </View>
    )
}