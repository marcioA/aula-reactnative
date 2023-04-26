import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 64,
        height: 64,
    },
    onlineIndicator: {
        backgroundColor: "green",
        position: "absolute",
        width: 16,
        height: 16,
        borderRadius: 8,
        top: 0,
        right: 0,
        border: "2px solid white",
    },
    imageContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
    }
})