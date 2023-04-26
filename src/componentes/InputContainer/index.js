import React from 'react';
import { TextInput, View } from "react-native";
import { styles } from './styles';

const InputContainer = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="What's on your mind?" />
        </View>
    );
};
export default InputContainer;