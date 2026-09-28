import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Hey there, my name is Jean, lets build mobile apps!</Text>
        <View>
          <Text>About This App</Text>
          <Text>
            This is a simple screen I'm building to practice React Native
            components.
          </Text>
        </View>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={{ width: 64, height: 64 }}
        />
        <TextInput
          placeholder="Type here to translate!"
          multiline
          style={{
            minHeight: 80,
            borderWidth:1,
            padding: 10,
          }}
          />

      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 70,
  },
});
