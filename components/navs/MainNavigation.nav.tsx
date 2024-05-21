import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { BlurView } from "expo-blur"

export default function MainNavigation({ active }: { active: string }) {
  return (
    <View style={styles.container}>
      <BlurView intensity={100} style={styles.blur}>
        <View style={styles.nav}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.href = "/list"
            }}
          >
            <Ionicons
              name="list"
              size={24}
              color={active === "list" ? "#1D7BE9" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.centerButton}
            onPress={() => {
              window.location.href = "/"
            }}
          >
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              window.location.href = "/budget"
            }}
          >
            <Ionicons
              name="wallet"
              size={24}
              color={active === "budget" ? "#1D7BE9" : "black"}
            />
          </TouchableOpacity>
        </View>
      </BlurView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "gray",
  },
  blur: {
    width: "100%",
    borderRadius: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
  },
  button: {
    padding: 10,
  },
  centerButton: {
    padding: 10,
    backgroundColor: "black",
    borderRadius: 100,
  },
})
