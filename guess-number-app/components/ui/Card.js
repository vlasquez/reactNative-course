import { StyleSheet, View, Dimensions } from "react-native";

import Colors from "../../design-system/colors";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;
export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: Colors.primary800,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
