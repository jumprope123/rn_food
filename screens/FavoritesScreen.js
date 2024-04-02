import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
// import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
// import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  // const displayMealsContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoritesMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No Favorite Meals Yet</Text>
      </View>
    );
  }

  return <MealsList items={favoritesMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
