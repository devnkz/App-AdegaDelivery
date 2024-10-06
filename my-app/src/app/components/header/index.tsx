import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useBag } from '../contextBag';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';

export function Header() {

    const { cart, goToBag } = useBag();
    const [visible, setVisible] = useState(false);

    const HandleGoTobag = () => {
        goToBag(router);
    }

    useEffect(() => {
        if (cart.length > 0) {
            setVisible(true)
        }
    }, [cart]);




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
                    <TouchableOpacity onPress={HandleGoTobag}>
                        {visible && (
                            <Text className='bg-white text-center w-6 rounded-full text-xl absolute left-6 bottom-8'>{cart.length}</Text>
                        )}
                        <Feather name={'shopping-bag'} size={30} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}