import { View, StyleSheet, TouchableOpacity, Animated } from "react-native"
import { Link } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { BlurView } from "expo-blur"
import { NavigationContainer } from "@react-navigation/native"
import { useEffect, useRef } from "react"

export default function MainNavigation({ active }: { active: string }) {
  const isHome = active === "home"
  const rotateAnim = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isHome ? -2 : 4,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [isHome])

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  })

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
            <Animated.View style={{ transform: [{ rotate: rotation }] }}>
              <Ionicons
                name={isHome ? "add" : "close"}
                size={24}
                color="white"
              />
            </Animated.View>
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
