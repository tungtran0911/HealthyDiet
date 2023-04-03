import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import RootStack from "./src/router/Stack";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="black" />
      <RootStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
