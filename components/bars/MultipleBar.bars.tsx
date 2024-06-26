import React, { useState } from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  TouchableWithoutFeedback,
} from "react-native"

interface BarData {
  id: number
  category: string
  color: string
  progress: number
}

const data: BarData[] = [
  {
    id: 1,
    category: "Food",
    color: "#FB4444",
    progress: 0.4,
  },
  {
    id: 2,
    category: "Transport",
    color: "#5BA1F3",
    progress: 0.3,
  },
  {
    id: 3,
    category: "Entertainment",
    color: "#5BD8F3",
    progress: 0.2,
  },
]

interface ClickedBar {
  index: number
  category: string
  progress: number
  x: number
}

export default function MultipleBar() {
  const [clickedBar, setClickedBar] = useState<ClickedBar | null>(null)

  const handleBarClick = (
    index: number,
    category: string,
    progress: number,
    event: GestureResponderEvent
  ) => {
    const { pageX, locationX } = event.nativeEvent
    let cumulativeProgress = 0
    for (let i = 0; i < index; i++) {
      cumulativeProgress += data[i].progress
    }
    const barLeftPosition =
      cumulativeProgress < 0.5
        ? cumulativeProgress * 100
        : cumulativeProgress * 100 - 20
    setClickedBar({ index, category, progress, x: barLeftPosition })
  }

  const handleOutsideClick = () => {
    setClickedBar(null)
  }

  return (
    <TouchableWithoutFeedback onPress={handleOutsideClick}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.bar,
                {
                  width: `${item.progress * 100}%`,
                  backgroundColor: item.color,
                },
              ]}
              onPress={(event) =>
                handleBarClick(index, item.category, item.progress, event)
              }
            />
          ))}
        </View>
        {clickedBar !== null && (
          <View
            style={[
              styles.popup,
              { left: `${clickedBar.x + (clickedBar.progress * 100) / 2}%` },
            ]}
          >
            <Text style={styles.popupText}>
              {clickedBar.category} $
              {Math.round(clickedBar.progress * (10000 / 125))}
            </Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
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
  popup: {
    position: "absolute",
    bottom: 20,
    padding: 5,
    backgroundColor: "black",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  popupText: {
    color: "white",
    fontSize: 12,
  },
})
