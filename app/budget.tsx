import MainNavigation from "@/components/navs/MainNavigation.nav"
import { StyleSheet, View, Text } from "react-native"

export default function Budget() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Budget Page</Text>
      <MainNavigation active={"budget"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
})
