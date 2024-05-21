import { Text, View, StyleSheet } from "react-native"
import { useState } from "react"

const data = [
  {
    id: 1,
    color: "#FB4444",
    progress: 0.4,
  },
  {
    id: 2,
    color: "#5BA1F3",
    progress: 0.3,
  },
  {
    id: 3,
    color: "#5BD8F3",
    progress: 0.2,
  },
]

const handleBarClick = (index: number) => {
  console.log(`Bar ${index + 1} clicked`)
}

export default function MultipleBar() {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View
          key={index}
          style={[
            styles.bar,
            {
              width: `${item.progress * 100}%`,
              backgroundColor: item.color,
            },
          ]}
          onTouchStart={() => handleBarClick(index)}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 8,
    flexDirection: "row",
    backgroundColor: "gray",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
  },
  bar: {
    height: "100%",
  },
})
