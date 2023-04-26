import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const Header = ({ headerTitle }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{headerTitle}</Text>
            <View style={styles.iconButtonRow}>
                <TouchableOpacity style={styles.iconButton} activeOpacity={0.7} onPress={() => true}>
                    <MaterialCommunityIcons name='magnify' size={28} color='#010101' />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => true}>
                    <MaterialCommunityIcons
                        name='facebook-messenger'
                        size={28}
                        color='#010101'
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default Header;