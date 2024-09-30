import { MotiView } from 'moti';
import React from 'react';
import { View, Text, Pressable } from 'react-native';

interface ButtonMenuProps {
    onPress: () => void;
    label: string;
    activeCategory: string;
}

export const Button_Menu: React.FC<ButtonMenuProps> = ({ onPress, label, activeCategory }) => {
    const isActive = label.trim().toLowerCase() === activeCategory.trim().toLowerCase();

    return (
        <View>
            <Pressable onPress={onPress}>
                <View style={{elevation: 5,}} className={`flex items-center p-1 bg-white rounded-lg mr-6`}>
                    <Text className='p-2 rounded-lg text-xl m-0'>{label}</Text>
                    {isActive && (
                        <MotiView from={{width: 0}}
                        animate={{width: 36}}
                         className='h-1 rounded-full bg-black m-0'>
                        </MotiView>
                    )}
                </View>
            </Pressable>

        </View>
    );
};
