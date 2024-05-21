import { StyleSheet, Text, View } from "react-native"
import DailyBudgetCard from "@/components/cards/DailyBudget.cards"
import MainNavigation from "@/components/navs/MainNavigation.nav"

export default function Page() {
  return (
    <View style={styles.container}>
      <DailyBudgetCard />
      <MainNavigation active={"home"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
})
