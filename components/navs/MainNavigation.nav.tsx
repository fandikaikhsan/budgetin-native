import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { BlurView } from "expo-blur"

export default function MainNavigation() {
  // create rounded navigation with 3 button and blur backgroud. center button is the main button with circle shape
  return (
    <View style={styles.container}>
      <BlurView intensity={100} style={styles.blur}>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="list" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.centerButton}>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="wallet" size={24} color="black" />
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
