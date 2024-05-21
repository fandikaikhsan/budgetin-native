import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import MultipleBar from "@/components/bars/MultipleBar.bars"

export default function DailyBudgetCard() {
  //   const [barClicked, setBarClicked] = useState<number | null>(null)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Remain</Text>
      <Text style={styles.amount}>$35</Text>
      <MultipleBar />
      <View style={styles.popUp}>
        <Text style={styles.popUpText}>Bar clicked</Text>
      </View>
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
  amount: {
    fontSize: 30,
    fontWeight: "bold",
  },
  bar: {
    marginTop: 10,
  },
  popUp: {
    position: "absolute",
    top: 50,
    left: 130,
    width: "auto",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
  },
  popUpText: {
    color: "white",
    fontSize: 10,
  },
})
