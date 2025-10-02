import { useEffect, useState, useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { LoggedInContext } from "@/App";

const PetRow = ({name}) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const { isLoggedIn, toggleIsLoggedIn } = useContext(LoggedInContext);
  console.log("Is logged in:", isLoggedIn);
  console.log("Toggle function:", toggleIsLoggedIn);
  
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Button
          title={isLoggedIn ? "Log Out" : "Log In"}
          onPress={toggleIsLoggedIn}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: '100%',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
