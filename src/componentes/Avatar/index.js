import { Image, Text, View } from 'react-native';
import { styles } from './styles';

export const Avatar = ({ imageSource }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageContainer}
                source={{ uri: imageSource }}
            />
            <View style={styles.onlineIndicator} />
        </View>
    );
};