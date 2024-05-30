import { router } from "expo-router";
import { Button, Text, View } from "react-native";

import { useAuth } from "@/hooks/useAuth";

export default function SignIn() {
  const { signIn } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Sign In"
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        }}
      />
    </View>
  );
}
