import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";

const App = () => {
  const users = [
    { id: 1, name: "Usman" },
    { id: 2, name: "Zain Khan" },
    { id: 3, name: "Zuhaib" },
    { id: 4, name: "Masab Sahibzada" },
    { id: 10, name: "Ali Sahibzada" },
  ];

  return (
    <View>
      <Text style={{ fontSize: 30 }}>List with Flat-List Components</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 20 }}>{item.name}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({}); // Empty styles object (can be used for future styling)

export default App;
