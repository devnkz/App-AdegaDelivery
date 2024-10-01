import { Feather } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export function SeachBar({ onpress, width, value, onChangeText }) {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        if (query.trim() === '') return;

        try {
            const response = await axios.get(`http://192.168.1.10:3000/pesquisa?q=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    return (
        <View className='w-full items-center p-5'>
            <View style={{ elevation: 10, width: width }} className='flex flex-row items-center gap-4 p-4 rounded-full bg-white'>
                <Feather name='search' size={24} color={'black'} />
                <TextInput
                    className='w-full'
                    placeholder='Pesquisar...'
                    onPress={onpress}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    )
}