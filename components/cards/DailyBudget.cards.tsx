import { View, Text, StyleSheet } from "react-native"
import MultipleBar from "@/components/bars/MultipleBar.bars"

export default function DailyBudgetCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Remain</Text>
      <Text style={styles.amount}>$100</Text>
      <MultipleBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#EEEBA2",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "column",
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "regular",
  },
  amount: {
    fontSize: 30,
    fontWeight: "bold",
  },
  bar: {
    marginTop: 10,
  },
})