import { router } from 'expo-router';
import { Button, Text, View } from "react-native";

import { useAuth } from "@/hooks/useAuth";

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Sign Out"
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}
      />

      <Button
        title="Aqui é tela user do grup app"
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          router.replace('/(tabs)/explore');
        }}
      />
    </View>
  );
}
