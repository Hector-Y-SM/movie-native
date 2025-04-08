import { Stack } from "expo-router";


// barra de navegación
// index 
// profile
// saved
// search

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false,
      }}
    />
  </Stack>
}
