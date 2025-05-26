import React from "react";
import { View,Text,Image } from "react-native";
export default function ScreenProfile2 () {
    return (
        <View style={styles.homeScreen}>
        <Image>
          pfp
        </Image>
        <Button style={styles.button}>Cambiar Imagen</Button>
        <TextInput style={styles.input} placeholder= "direccion" ></TextInput>
        <TextInput style={styles.input} placeholder= "Numero" keyboardType = 'phone-pad'></TextInput>
        <Button style={styles.button}>Confirmar</Button>
      </View>
    )
}