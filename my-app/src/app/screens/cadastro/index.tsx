import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import { Input } from '../../components/input';
import { useRouter } from 'expo-router';


const Cadastro = () => {

    const router = useRouter();

    const handleHome = () =>{
        router.push('../home')
    }

    const handleLogin = () =>{
        router.push('../login')
    }

    return (
            <View style={{ flex: 1, backgroundColor: '#d3d3d3' }} className='flex justify-center items-center gap-4'>
                <Image
                    className='h-[20%] w-[65%]'
                    source={require('../../../assets/imgs/logo.png')}
                />
                <Text className='text-2xl font-light'>Crie sua conta!</Text>

                <Input placeholder={'Digite seu nome...'} nameIcon={'user'} />
                <Input placeholder={'Digite seu email...'} nameIcon={'mail'} />
                <Input placeholder={'Crie uma senha...'} nameIcon={'lock'} />
                <Input placeholder={'Bairro...'} nameIcon={'home'} />
                <Input placeholder={'Rua...'} nameIcon={'home'} />
                <Input placeholder={'Número da casa..'} nameIcon={'home'} />

                <TouchableOpacity onPress={handleHome} style={{width: 330}}>
                    <Text className='text-white bg-black p-4 rounded-full text-center font-light text-2xl'>Criar</Text>
                </TouchableOpacity>

                <Pressable onPress={handleLogin} className='w-4/5 ml-4'>
                    <Text>Já Possui uma conta ?</Text>
                </Pressable>
            </View>
    )
}

export default Cadastro;