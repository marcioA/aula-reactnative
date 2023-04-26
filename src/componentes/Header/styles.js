import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 28,
        fontWeight: 700,
        letterSpacing: 0.25,
        color: "#4267b2",
    },
    iconButtonRow: {
        flexDirection: "row"
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        background: "#e6e6e6",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 12,
    },
    textInput: {
        width: "100%",
        height: 60,
        fontSize: 18,
        flex: 1,
        color: "#010101",
        marginLeft: 10,
    }
})