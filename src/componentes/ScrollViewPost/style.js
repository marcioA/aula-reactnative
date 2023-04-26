import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    verticalList: {
        flex: 1,
    },
    header: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 6,
        // padding: '0 11',
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    smallAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    userName: {
        paddingLeft: 8,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#010101',
    },
    postDescription: {
        fontSize: 14,
        color: '#222121',
        lineHeight: 16,
        // padding: '0 11',
    },
    postImage: {
        marginTop: 9,
        width: '100%',
        height: 300,
    }
});
