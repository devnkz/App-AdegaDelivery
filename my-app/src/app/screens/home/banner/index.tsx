import { View, Image } from 'react-native';

export function Banner() {
    return (
        <View className='w-full flex items-center'>
            <View className='bg-black w-11/12 h-56 rounded-xl mt-4 flex items-center justify-center'>
                <Image
                    className='w-72 h-56'
                    source={require('../../../../assets/imgs/banner.png')}
                />
            </View>
        </View>
    )
}