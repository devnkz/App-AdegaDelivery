import { MotiView } from "moti";
import { Image, Text } from "react-native";
export function NotFoundSearch({text}) {
    return (
        <MotiView
            from={{ marginTop: 100 }}
            animate={{ marginTop: 200 }}
            transition={{
                type: 'timing',
                duration: 1500,
                loop: true,
            }}
            style={{ flex: 1 }} className="justify-center items-center">
            <Image className='h-56 w-36' source={require('../../../assets/imgs/notFound.png')} />
            <Text className="font-bold text-2xl">{text}</Text>
        </MotiView>
    )
}