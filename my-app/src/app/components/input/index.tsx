import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function Input({ placeholder, nameIcon}) {
    return (
        <View style={{ elevation: 2 }} className='flex flex-row bg-white w-4/5 p-4 rounded-full items-center gap-2'>
            <Feather name={nameIcon} size={24} color={'black'} />
            <TextInput
                placeholder={placeholder}  
            />
        </View>
    )
}