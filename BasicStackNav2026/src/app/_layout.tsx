import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "Welcome Sathvik" }} />
      <Stack.Screen name="home" options={{ title: "Home" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
      <Stack.Screen name="school" options={{ title: "Fremd HS" }} />
    </Stack>
  );
}
