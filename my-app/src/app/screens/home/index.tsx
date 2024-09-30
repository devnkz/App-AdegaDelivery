import { Text, ScrollView, Pressable, View, Button, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Banner } from './banner'
import { SeachBar } from '../../components/searchBar';
import { ListProdutos } from '../../components/Flat_List';
import { Header } from '../../components/header';


const Home = () => {

    const [visible, setVisible] = useState(true)
    const [buttonAlterVisible, setButtonAlterVisible] = useState(false)
    const [width, setWidth] = useState('100%')

    function alterVisibleFalse() {
        setVisible(false)
        setButtonAlterVisible(true)
        setWidth('70%')
    }

    function alterVisibleTrue() {
        setVisible(true)
        setButtonAlterVisible(false)
        setWidth('100%')
    }

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        if (query.trim() === '') return;

        try {
            const response = await fetch(`http://192.168.1.10:3000/pesquisa?q=${query}`);
            if (!response.ok) {
                throw new Error('Erro na resposta da rede');
            }
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#d3d3d3' }}>
                <Header linkRouter={'../user'} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <>
                        {visible && (
                            <>
                                <Text className='text-3xl w-4/5 ml-6 font-semibold mt-4'>Somente as melhores, Bebidas matam sua sede</Text>
                                <Text className='ml-6'>Faça um pedido e receba no conforto de sua casa</Text>
                                <Banner />
                            </>
                        )}
                        <View className='flex-row items-center'>
                            {buttonAlterVisible && (
                                <>
                                    <Pressable onPress={alterVisibleTrue} className='bg-black flex items-center justify-center p-3 rounded-full'>
                                        <Feather name={'arrow-left'} size={24} color={'white'} />
                                    </Pressable>
                                    <Button title='Buscar' onPress={handleSearch} />
                                </>
                            )}

                            <SeachBar value={query} onChangeText={setQuery} onpress={() => {
                                alterVisibleFalse();
                            }} width={width} />

                        </View>

                        {buttonAlterVisible && (
                            <FlatList
                                data={results}
                                scrollEnabled={false}
                                keyExtractor={(item) => item.id.toString()} 
                                renderItem={({ item }) => (
                                    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                                        <Text>{item.nome} - R${item.preco}</Text>
                                    </View>
                                )}
                            />
                        )}

                        {visible && (
                            <ListProdutos />
                        )}
                    </>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider >
    )
}

export default Home;