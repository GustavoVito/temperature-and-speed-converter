import React, { useState } from "react";
import {SafeAreaView, StyleSheet, TextInput, Button, Text } from 'react-native';


const App = () => {
  const [celsius, setCelsius] = useState("");
  const [kilometers, setkilometers] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [miles, setmiles] = useState("");

  function calculateTemp () {
  return setFahrenheit ((celsius * 1.8 + 32).toFixed(2))
  }

  function calculateSpeed () {
  return setmiles ((kilometers / 1.609344).toFixed(3))
  }

return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Conversor de valores</Text>

      <Text style={styles.p}>Converter ºC para ºF</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCelsius}
        placeholder="Ex. 37"
        keyboardType="numeric"
      />

      <Button title="Converter Temperatura" onPress={calculateTemp} />
      <Text style={styles.result}>{fahrenheit} ºF</Text>


      <Text style={styles.p}>Converter km/h para mph</Text>
      <TextInput
        style={styles.input}
        onChangeText={setkilometers}
        placeholder="Ex. 50"
        keyboardType="numeric"
      />

      <Button title="Converter Velocidade" onPress={calculateSpeed} />
      <Text style={styles.result}>{miles} mph</Text>

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
    marginTop: 20 ,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  p: {
    fontSize: 15,
    fontWeight: 500,
    marginBottom: 5,
  },

  input: {
    width: 250,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 16,
    marginTop: 20,
  },
});
export default App;