import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Login from "./App/Screen/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_cHJpbWUtcGFyYWtlZXQtODIuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <View className="  pt-[20px] flex-1 items-center">
        {/* signed in components */}
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>

        {/* signed out components */}
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}
