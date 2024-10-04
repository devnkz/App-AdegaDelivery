import { Feather } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';

export function SeachBar({ onpress, width, value, onChangeText }) {
    return (
        <View className='w-full items-center'>
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