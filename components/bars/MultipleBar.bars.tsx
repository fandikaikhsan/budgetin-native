import { View, StyleSheet } from "react-native"

const data = [
  {
    color: "#FB4444",
    progress: 0.4,
  },
  {
    color: "#5BA1F3",
    progress: 0.3,
  },
  {
    color: "#5BD8F3",
    progress: 0.2,
  },
]

export default function MultipleBar() {
  // create one stacked bar chart
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View
          key={index}
          style={{
            ...styles.bar,
            backgroundColor: item.color,
            width: `${item.progress * 100}%`,
          }}
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
