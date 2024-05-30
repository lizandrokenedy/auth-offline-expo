import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Alert, Button, Text, View } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

import { useAuth } from "@/hooks/useAuth";

export default function App() {
  const { signOut } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function verifyAvaiableAuthentication() {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    console.log(compatible);

    // {"1": "FINGERPRINT", "2": "FACIAL_RECOGNITION", "3": "IRIS", "FACIAL_RECOGNITION": 2, "FINGERPRINT": 1, "IRIS": 3}
    // const typesEnum = LocalAuthentication.AuthenticationType;
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log(types);
  }

  async function handleAuthentication() {
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    console.log(isEnrolled);

    if (!isEnrolled) {
      return Alert.alert(
        "Login",
        "Nenhuma autenticação local encontrada."
      );
    }

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Autenticação Local",
      fallbackLabel: "Autenticação não reconhecida",
    });

    console.log(auth);
  }

  useEffect(() => {
    verifyAvaiableAuthentication();
  }, []);

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
        title="Aqui é o grupo app"
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          router.replace("/(tabs)/explore");
        }}
      />

      <Button
        title="Aqui vai para o grupo tabs"
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          router.replace("/(tabs)/explore");
        }}
      />

      <Button title="Entrar Local" onPress={handleAuthentication} />

      <Text style={{ color: "#FFF" }}>
        Usuário autenticado: {isAuthenticated ? "Sim" : "Não"}
      </Text>
    </View>
  );
}
