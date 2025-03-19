import Stack from "@/components/ui/Stack";

export default function Layout() {
    return (
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="sign-in"  options={{presentation: "modal", title: "Sign In"}}/>
        <Stack.Screen name="sign-up" options={{presentation: "modal", title: "Sign Up"}}/>
    </Stack>
    );
}