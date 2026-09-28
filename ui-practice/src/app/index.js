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

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Text</Text>
      </View>
      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.bodyContent}
      >
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Jane Doe</Text>
        <Text style={styles.subtitle}>Software Developer</Text>

        <Pressable
          style={styles.detailsButton}
          onPress={() => router.push("/details")}
        >
          <Text style={styles.detailsButtonText}>View Tiles</Text>
        </Pressable>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Heading</Text>
          <Text style={styles.cardText}>
            This is a short description for this card.
          </Text>
        </View>
        <View style={styles.listCard}>
          <Text style={styles.cardTitle}>Recent Items</Text>
          <View style={styles.listRow}>
            <Image
              source={{ uri: "https://i.pravatar.cc/40" }}
              style={styles.listImage}
            />
            <View>
              <Text style={styles.listItemTitle}>Item One</Text>
              <Text style={styles.listItemSubtitle}>Short detail here</Text>
            </View>
          </View>
          <View style={styles.listRow}>
            <Image
              source={{ uri: "https://i.pravatar.cc/40" }}
              style={styles.listImage}
            />
            <View>
              <Text style={styles.listItemTitle}>Item Two</Text>
              <Text style={styles.listItemSubtitle}>Another short detail</Text>
            </View>
          </View>
        </View>
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
  header: {
    backgroundColor: "#8ecae6",
    height: 90,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  body: {
    flex: 1,
    width: "100%",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  bodyContent: {
    alignItems: "center",
  },
  name: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#666",
  },
  detailsButton: {
    marginTop: 20,
    backgroundColor: "#219ebc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  detailsButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "#8e7cc3",
    borderRadius: 12,
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  cardText: {
    fontSize: 13,
    color: "#fff",
    marginTop: 6,
  },
  listCard: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "#ffd60a",
    borderRadius: 12,
    padding: 16,
  },
  listRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  listImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  listItemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  listItemSubtitle: {
    fontSize: 12,
    color: "#555",
  },
});