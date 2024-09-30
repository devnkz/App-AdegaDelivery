import { View, Text, TouchableOpacity, Image, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useGlobalSearchParams } from 'expo-router';
import { produtoProps } from '../../components/Flat_List';

export default function user() {

    const router = useRouter();

    const handleLogin = () => {
        router.push('../home')
    }

    const { cart } = useGlobalSearchParams();
    const cartItems: produtoProps[] = typeof cart === 'string' ? JSON.parse(cart) : [];

    const [contador, setContador] = useState(1);

    return (
        <>
            <StatusBar backgroundColor='#D3D3D3' />

            <SafeAreaProvider style={{ flex: 1, backgroundColor: '#d3d3d3' }} >
                <SafeAreaView>
                    <ScrollView>
                        <View className='w-full items-center h-36 justify-center flex-row gap-4'>
                            <TouchableOpacity onPress={handleLogin}>
                                <View className='bg-black p-2 rounded-lg'>
                                    <Feather name={'arrow-left'} size={24} color={'white'} />
                                </View>
                            </TouchableOpacity>
                            <Text className='text-3xl font-semibold'>Seu carrinho</Text>
                        </View>
                        {cartItems.map((item) => (
                            <View className='w-full items-center mt-4'>
                                <View className='w-11/12 flex flex-row justify-between bg-white p-3 rounded-lg items-center' style={{ elevation: 10 }}>
                                    <View>
                                        <Text key={item.id} className='text-3xl font-bold'>{item.nome}</Text>
                                        <Text key={item.id}>{item.tipo}</Text>
                                        <Text key={item.id}>{item.modelo}</Text>
                                        <Text key={item.id}>{item.tamanho}</Text>
                                        <Text key={item.id} className='text-3xl font-light text-green-600'>R$ {item.preco}</Text>


                                        <View className='flex flex-row items-center gap-2'>
                                            <Pressable
                                                onPress={() => {
                                                    if (contador > 1) {
                                                        setContador(contador - 1);
                                                    }
                                                }} className='bg-black rounded-lg w-8 h-8 items-center justify-center'>
                                                <Feather name={'minus'} size={24} color={'#FFF'} />
                                            </Pressable>
                                            <Text className='text-3xl'>{contador}</Text>
                                            <Pressable
                                                onPress={() => {
                                                    if (contador < 12) {
                                                        setContador(contador + 1);
                                                    }
                                                }} className='bg-black rounded-lg w-8 h-8 items-center justify-center'>
                                                <Feather name={'plus'} size={24} color={'#FFF'} />
                                            </Pressable>
                                        </View>


                                    </View>
                                    <View>
                                        <Image
                                            key={item.id}
                                            source={{ uri: item.url_image }}
                                            className='h-52 w-24'
                                        />
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
        </>
    )
}