import React from "react";
import { View,Text,Image } from "react-native";
import globalStyles from '../globalStyles';

export default function ScreenProfile2 () {
    return (
        <View style={globalStyles.homeScreen}>
        <Image
          source={assets/PerfilAvatar.jpg}
          style={{width: 200, height: 200}}
        /> 
        <Button style={globalStyles.button}>Cambiar Imagen</Button>
        <TextInput style={globalStyles.input} placeholder= "direccion" ></TextInput>
        <TextInput style={globalStyles.input} placeholder= "Numero" keyboardType = 'phone-pad'></TextInput>
        <Button style={globalStyles.button}>Confirmar</Button>
      </View>
    )
}