import { View, Text, TouchableOpacity, Image, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useGlobalSearchParams } from 'expo-router';
import { produtoProps } from '../../components/Flat_List';
import { ButtonPay } from '../../components/ButtonPay';

export default function User() {
    const router = useRouter();
    const { cart } = useGlobalSearchParams();
    const cartItems: produtoProps[] = typeof cart === 'string' ? JSON.parse(cart) : [];

    const [quantidades, setQuantidades] = useState<{ [key: number]: number }>({});

    const addQuantity = (id: number) => {
        if (id < 12) {
            setQuantidades(prev => ({
                ...prev,
                [id]: (prev[id] || 1) + 1,
            }));
        }
    };

    const removeQuantity = (id: number) => {
        setQuantidades(prev => ({
            ...prev,
            [id]: Math.max((prev[id] || 1) - 1, 1),
        }));
    };

    const handleLogin = () => {
        router.push('../home');
    };

    return (
        <>
            <StatusBar backgroundColor='#D3D3D3' />

            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1, backgroundColor: '#d3d3d3' }}>
                <ButtonPay valorItem={cartItems.reduce((total, item) => total + (item.preco * (quantidades[item.id] || 1.)), 0).toFixed(2)} />
                    <ScrollView>
                        <View className='w-full items-center h-36 justify-center flex-row gap-4'>
                            <TouchableOpacity onPress={handleLogin}>
                                <View className='bg-black p-2 rounded-lg'>
                                    <Feather name={'arrow-left'} size={24} color={'white'} />
                                </View>
                            </TouchableOpacity>
                            <Text className='text-3xl font-semibold'>Seu carrinho</Text>
                        </View>
                        {cartItems.map((item) => {
                            const quantidade = quantidades[item.id] || 1;
                            return (
                                <View className='w-full items-center mt-4' key={item.id}>
                                    <View className='w-11/12 flex flex-row justify-between bg-white p-3 rounded-lg items-center' style={{ elevation: 10 }}>
                                        <View>
                                            <Text className='text-3xl font-bold'>{item.nome}</Text>
                                            <Text>{item.tipo}</Text>
                                            <Text>{item.modelo}</Text>
                                            <Text>{item.tamanho}</Text>
                                            <Text className='text-3xl font-light text-green-600'>R$ {item.preco}</Text>

                                            <View className='flex flex-row items-center gap-2'>
                                                <Pressable
                                                    onPress={() => removeQuantity(item.id)}
                                                    className='bg-black rounded-lg w-8 h-8 items-center justify-center'>
                                                    <Feather name={'minus'} size={24} color={'#FFF'} />
                                                </Pressable>
                                                <Text className='text-3xl'>{quantidade}</Text>
                                                <Pressable
                                                    onPress={() => addQuantity(item.id)}
                                                    className='bg-black rounded-lg w-8 h-8 items-center justify-center'>
                                                    <Feather name={'plus'} size={24} color={'#FFF'} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View>
                                            <Image
                                                source={{ uri: item.url_image }}
                                                className='h-52 w-24'
                                            />
                                        </View>
                                    </View>
                                </View>
                            );
                        })}
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
        </>
    );
}
