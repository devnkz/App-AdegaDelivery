import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export function Header({linkRouter}) {

    const router = useRouter();

    const handleBag = () =>{
        router.push(linkRouter)
    }

    return (
        <>
            <StatusBar backgroundColor='black' />
            <View className='flex justify-center w-full items-center h-28'>
                <View className='bg-black w-full h-full justify-around items-center flex-row p-4'>
                    <View className='flex justify-center'>
                        <Text className='text-white'>Olá</Text>
                        <Text className='text-white'>Nyckolas!</Text>
                    </View>
                    <View className='flex flex-row gap-2 items-center'>
                        <Feather name={'map-pin'} size={24} color={'#fff'} />
                        <View>
                            <Text className='text-white' numberOfLines={1}>
                                Universitario V</Text>
                            <Text className='text-white' numberOfLines={1}>
                                Genesio Antonio Maschio</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleBag}>
                        <Feather name={'shopping-bag'} size={30} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>

        </>
    )
}