import React from 'react';
import { styles } from './style';
import { Image, ScrollView, Text, View } from 'react-native';

const ScrollViewPost = ({ data }) => {
    return (
        <ScrollView style={styles.verticalList} showsVerticalScrollIndicator={false}>
            {data.map(item => (
                <View key={item.id}>
                    <View style={styles.header}>
                        <View style={styles.row}>
                            <Image style={styles.smallAvatar} source={{ uri: item.userAvatar }} />
                            <Text style={styles.userName}>{item.userName}</Text>
                        </View>
                    </View>
                    <Text style={styles.postDescription}>{item.postText}</Text>
                    <Image style={styles.postImage} source={{ uri: item.postImage }} />
                </View>
            ))}
        </ScrollView>
    );
};
export default ScrollViewPost;