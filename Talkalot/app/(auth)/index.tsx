import { View, StyleSheet, Pressable, Image } from "react-native";
import { Text } from "@/components/ui/Form";
import { useRouter } from "expo-router";


export default function Page() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image source={require("@/assets/images/app-icon.jpg")} style={styles.logo}/>

            <Text style={styles.title}>Talkalot!</Text>

            <Pressable style={styles.signInButton} onPress={() => router.push("/(auth)/sign-in")}>
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
            <Pressable style={styles.signUpButton} onPress={() => router.push("/(auth)/sign-up")}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#03669c",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    signInButton: {
        padding: 8,
        backgroundColor: "#5ab1ff",
        borderRadius: 20,
        width: 120
    },
    signUpButton: {
        padding: 8,
        backgroundColor: "#004769",
        borderRadius: 20,
        width: 120
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
});