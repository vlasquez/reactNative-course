import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonPressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={() => {}}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    marginHorizontal: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});
