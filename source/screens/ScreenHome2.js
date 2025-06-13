import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import globalStyles from "../globalStyles";
import { useNavigation } from "@react-navigation/native";

export default function ScreenHome2() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={globalStyles.homeScreen}>
      <Text style={globalStyles.title}>Bienvenido a la segunda pantalla</Text>

      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2909/2909767.png' }}
        style={{ width: 150, height: 150, marginVertical: 20 }}
      />

      <Text style={globalStyles.text}>
        Esta es una pantalla secundaria del inicio. Aquí podés mostrar noticias, consejos, o accesos rápidos a funciones específicas.
      </Text>
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={globalStyles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
