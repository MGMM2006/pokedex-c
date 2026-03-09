import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function PokemonDetailsScreen() {
  const params = useLocalSearchParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemonData();
  }, []);

  const getPokemonData = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
    const response = await fetch(URL, { method: "GET" });

    if (response.ok) {
      const data = await response.json();
      setPokemonData(data); // ✅ guarda el objeto completo
    } else {
      console.log("Bad Request");
    }
  };

  return (
    <View>
      <Text> {params.name} </Text>
      <Text> {JSON.stringify(pokemonData)}</Text>
    </View>
  );
}
