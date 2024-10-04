import { Text, ScrollView, Pressable, View, Button, FlatList, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Banner } from './banner'
import { SeachBar } from '../../components/searchBar';
import { ListProdutos } from '../../components/Flat_List';
import { Header } from '../../components/header';


const Home = () => {

    //Alterar visibilidade quando clicar na SearchBar
    const [visible, setVisible] = useState(true)
    const [buttonAlterVisible, setButtonAlterVisible] = useState(false)
    const [TypeIcon, setTypeIcon] = useState('search');

    function alterVisibleFalse() {
        setVisible(false)
        setButtonAlterVisible(true)
        setTypeIcon('arrow-left')
    }

    function alterVisibleTrue() {
        setVisible(true)
        setButtonAlterVisible(false)
        setTypeIcon('search')
    }

    //Funcao de busca da searchBar
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


    //Confirmar e exibir pesquisa conforme parar de digitar
    let timer: NodeJS.Timeout;

    const handleInputChange = (input: string) => {
        setQuery(input);
        clearTimeout(timer);

        timer = setTimeout(() => {
            handleSearch();
        }, 500);
    };

    useEffect(() => {
        return () => {
            clearTimeout(timer);
        };
    }, []);

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
                        <View className='items-center p-4'>
                            <SeachBar name={TypeIcon}
                             iconPress={() =>{alterVisibleTrue()}} value={query} onChangeText={handleInputChange}
                             onpress={() => {
                                alterVisibleFalse();
                            }}/>

                        </View>

                        {buttonAlterVisible && (
                            <FlatList
                                data={results}
                                scrollEnabled={false}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View className='w-full items-center mt-4'>
                                        <View className='w-11/12 flex flex-row justify-between bg-white p-3 rounded-lg items-center' style={{ elevation: 10 }}>
                                            <View>
                                                <Text className='text-3xl font-bold'>{item.nome}</Text>
                                                <Text>{item.tipo}</Text>
                                                <Text>{item.modelo}</Text>
                                                <Text>{item.tamanho}</Text>
                                                <Text className='text-3xl font-light text-green-600'>R$ {item.preco}</Text>

                                                <Pressable onPress={() => alert('apenas um text')} style={{ elevation: 5 }} className='flex flex-row items-center gap-2 w-36 justify-center rounded-lg p-2 bg-black mt-4'>
                                                    <Feather name={'shopping-bag'} size={24} color={'white'} />
                                                    <Text className='text-base font-semibold text-white '>Adicionar</Text>
                                                </Pressable>
                                            </View>
                                            <View>
                                                <Image
                                                    source={{ uri: item.url_image }}
                                                    className='h-52 w-24'
                                                />
                                            </View>
                                        </View>
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