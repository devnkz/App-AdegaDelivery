import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Input } from '../../components/input';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';

export default function login() {

    const router = useRouter();

    const handleLogin = () => {
        router.push('./screens/home')
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#d3d3d3' }} className='flex justify-center items-center gap-6'>
            <Image
                className='h-[20%] w-[65%]'
                source={require('../../../assets/imgs/logo.png')}
            />
            <Text className='text-2xl font-light text-gray-500'>Faça seu login em nossa  <Text className='text-3xl font-bold text-black'>ADEGA!</Text></Text>

            <Input placeholder={'Digite seu email...'} nameIcon={'mail'} />
            <Input placeholder={'Digite sua senha...'} nameIcon={'lock'} />

            <View className='w-4/5 items-end'>
                <Link className='text-gray-500' href={"./screens/cadastro"}>
                    Esqueceu a senha ?
                </Link>
            </View>

            <View className='w-4/5 gap-2'>
                <TouchableOpacity onPress={handleLogin} className='w-full'>
                    <Text className='text-white bg-black p-4 rounded-full text-center font-bold text-2xl'>
                        Entrar
                    </Text>
                </TouchableOpacity>
                
                <View className= 'ml-4 w-4/5  flex-row'>
                    <Text className='text-gray-500'>Não possui conta ? </Text>
                    <TouchableOpacity>
                        <Text className='font-bold'>Cadastre Agora</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};