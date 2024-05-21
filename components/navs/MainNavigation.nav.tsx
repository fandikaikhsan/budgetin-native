import { View, StyleSheet, TouchableOpacity, Pressable } from "react-native"
import { Link } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { BlurView } from "expo-blur"
import { NavigationContainer } from "@react-navigation/native"

export default function MainNavigation({ active }: { active: string }) {
  return (
    <View style={styles.container}>
      {/* <BlurView intensity={100} style={styles.blur}> */}
      <View style={styles.nav}>
        <Link replace href="/list" asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons
              name="list"
              size={24}
              color={active === "list" ? "#1D7BE9" : "black"}
            />
          </TouchableOpacity>
        </Link>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.centerButton}>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </Link>
        <Link href={"/budget"} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons
              name="wallet"
              size={24}
              color={active === "budget" ? "#1D7BE9" : "black"}
            />
          </TouchableOpacity>
        </Link>
      </View>
      {/* </BlurView> */}
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
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  button: {
    padding: 15,
  },
  centerButton: {
    padding: 10,
    backgroundColor: "black",
    borderRadius: 100,
  },
})
