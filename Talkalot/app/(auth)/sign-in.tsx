import { View, StyleSheet } from "react-native";
import { Text } from "@/components/ui/Form";


export default function Page() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In to Talkalot</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5ab1ff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    }
});