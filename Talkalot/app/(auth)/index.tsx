import { View, StyleSheet, Button } from "react-native";
import { Text } from "@/components/ui/Form";
import { useRouter } from "expo-router";


export default function Page() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Talkalot</Text>

            <Button title="Sign in" onPress={() => router.push("/(auth)/sign-in")} />
            <Button title="Sign up" onPress={() => router.push("/(auth)/sign-up")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    }
});