import { View, Text, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../design-system/colors";

function GameOverScreen({ roundsNumber, userNumber, onRestart }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Title>Game Over!</Title>
        <View style={styles.imageContainer}>
          <Image
            imageStyle={styles.image}
            soruce={require("../assets/images/success.png")}
          />
        </View>
      </View>
      <View>
        <Text style={styles.summaryText}>
          <Text style={styles.highlight}>Number of rounds:</Text> {roundsNumber}
          <Text style={styles.highlight}>Number was:</Text> {userNumber}
        </Text>
        <PrimaryButton onPress={onRestart}>Restart Game</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
