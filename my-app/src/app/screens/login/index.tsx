import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
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
            <Text className='text-2xl font-light'>Faça seu login em nossa adega!</Text>

            <Input placeholder={'Digite seu email...'} nameIcon={'mail'} />
            <Input placeholder={'Digite sua senha...'} nameIcon={'lock'} />

            <View className='w-4/5 gap-2'>
                <TouchableOpacity onPress={handleLogin} className='w-full'>
                    <Text className='text-white bg-black p-4 rounded-full text-center font-light text-2xl'>
                        Entrar
                    </Text>
                </TouchableOpacity>
                <View className='flex flex-row justify-between'>
                    <Link href={'./screens/cadastro'}>
                        Crie uma conta
                    </Link>
                    <Link href={"./screens/cadastro"}>
                        Esqueceu a senha ?
                    </Link>
                </View>
            </View>
        </View>
    )
};