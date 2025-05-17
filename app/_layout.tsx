import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "./styles/globals.css";

export default function RootLayout() {
  const options = { headerShown: false };
  return (
    <>
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen name="index" options={options} />
        <Stack.Screen name="login" options={options} />
        <Stack.Screen name="register" options={options} />
      </Stack>
    </>
  );
}
