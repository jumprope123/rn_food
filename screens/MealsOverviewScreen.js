import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useEffect, useLayoutEffect } from "react";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";
// import { useRoute } from "@react-navigation/native";
function MealsOverviewScreen({ navigation, route }) {
  const categoryId = route.params.categoryId;
  //   const route = useRoute();

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  //   useEffect(() => {
  //     const categoryTitle = CATEGORIES.find(
  //       (category) => category.id === categoryId
  //     ).title;

  //     navigation.setOptions({
  //       title: categoryTitle,
  //     });
  //   }, [categoryId, navigation]);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayMeals} />;
}
export default MealsOverviewScreen;
