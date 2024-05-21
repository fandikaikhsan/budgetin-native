import MainNavigation from "@/components/navs/MainNavigation.nav"
import { StyleSheet, View, Text } from "react-native"

export default function List() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>List Page</Text>
      <MainNavigation active={"list"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
})