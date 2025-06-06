import React from "react";
import { View,TextInput,Image, Pressable, Text } from "react-native";
import globalStyles from '../globalStyles';
import Perfil from '../../assets/PerfilAvatar.jpg';
import { useNavigation } from '@react-navigation/native';
export default function ScreenProfile2 () {
    return (
        <View style={globalStyles.homeScreen}>
        <Image
          source={Perfil}
          style={{width: 200, height: 200}}
        /> 
        <Pressable style={globalStyles.button}><Text>Cambiar Imagen</Text></Pressable>
        <TextInput style={globalStyles.input} placeholder= "direccion" ></TextInput>
        <TextInput style={globalStyles.input} placeholder= "Numero" keyboardType = 'phone-pad'></TextInput>
        <Pressable style={globalStyles.button}><Text>Confirmar</Text></Pressable>
      </View>
    )
}