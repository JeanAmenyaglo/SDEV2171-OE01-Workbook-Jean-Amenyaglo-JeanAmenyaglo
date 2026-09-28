import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.bodyContent}
      >
        <View style={styles.tilesRow}>
          <View style={styles.tile}>
            <Image
              source={{ uri: "https://i.pravatar.cc/40" }}
              style={styles.tileImage}
            />
            <Text style={styles.tileText}>Tile 1</Text>
          </View>
          <View style={styles.tile}>
            <Image
              source={{ uri: "https://i.pravatar.cc/40" }}
              style={styles.tileImage}
            />
            <Text style={styles.tileText}>Tile 2</Text>
          </View>
          <View style={styles.tile}>
            <Image
              source={{ uri: "https://i.pravatar.cc/40" }}
              style={styles.tileImage}
            />
            <Text style={styles.tileText}>Tile 3</Text>
          </View>
        </View>

        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go back</Text>
        </Pressable>
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
    justifyContent: "flex-start",
  },
  body: {
    flex: 1,
    width: "100%",
  },
  bodyContent: {
    alignItems: "center",
    paddingTop: 40,
  },
  tilesRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  tile: {
    width: 90,
    height: 90,
    backgroundColor: "#ffb703",
    alignItems: "center",
    justifyContent: "center",
  },
  tileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  tileText: {
    fontSize: 10,
    marginTop: 4,
  },
  backButton: {
    marginTop: 24,
    backgroundColor: "#023047",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});