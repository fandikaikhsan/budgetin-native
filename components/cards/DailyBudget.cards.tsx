import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import MultipleBar from "@/components/bars/MultipleBar.bars"

export default function DailyBudgetCard() {
  //   const [barClicked, setBarClicked] = useState<number | null>(null)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Remain</Text>
      <View style={styles.amountWrap}>
        <Text style={styles.amount}>$35</Text>
        <Text style={styles.amountTotal}>/ $125</Text>
      </View>
      <MultipleBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
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
    fontSize: 14,
    fontWeight: "light",
  },
  amountWrap: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 4,
  },
  amount: {
    fontSize: 30,
    fontWeight: "bold",
  },
  amountTotal: {
    fontSize: 14,
    fontWeight: "thin",
    opacity: 0.8,
  },
  bar: {
    marginTop: 10,
  },
})
