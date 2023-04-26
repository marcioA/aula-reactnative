import { Text, View } from 'react-native';

import { styles } from './styles';
import { Avatar } from '../../componentes/Avatar';
import InputContainer from '../../componentes/InputContainer';

export default function ListaPost() {
    return (
        <View>
            <InputContainer />
            <Avatar imageSource={"https://github.com/marcioA.png"} />
        </View>
    )
}
