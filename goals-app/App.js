import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, SetModalIsVisible] = useState(false);

  function addGoalHandler(goalText) {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
  }
  function startAddGoalHandler() {
    SetModalIsVisible(true);
  }
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput modalIsVisible={modalIsVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
