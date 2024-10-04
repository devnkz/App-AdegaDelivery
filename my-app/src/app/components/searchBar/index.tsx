import { Feather } from '@expo/vector-icons';
import { Pressable, TextInput, View } from 'react-native';

export function SeachBar({ onpress, value, onChangeText, iconPress,name}) {
    return (
        <View className='w-full items-center'>
            <View style={{ elevation: 10}} className='flex flex-row items-center gap-4 p-4 rounded-full bg-white w-full'>
                <Pressable onPress={iconPress}>
                    <Feather name={name} size={24} color={'black'} />
                </Pressable>
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