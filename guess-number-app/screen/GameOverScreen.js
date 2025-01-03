import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../design-system/colors";

const deviceWidth = Dimensions.get("window").width;

function GameOverScreen({ roundsNumber, userNumber, onRestart }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Title>Game Over!</Title>
        <View style={styles.imageContainer}>
          <Image
            styles={styles.image}
            source={require("../assets/images/success.png")}
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
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 150 : 300,
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
