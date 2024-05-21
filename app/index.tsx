import { StyleSheet, Text, View } from "react-native"
import DailyBudgetCard from "@/components/cards/DailyBudget.cards"

export default function Page() {
  return (
    <View style={styles.container}>
      <DailyBudgetCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#292F36",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
})
