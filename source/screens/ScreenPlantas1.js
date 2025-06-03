import React from "react";
import { View,Text,Image, Pressable } from "react-native";
import globalStyles from '../globalStyles';


export default function ScreenPlantas1 () {
    const navigation = useNavigation();
    let Plantas = [];
    return (
        <View style={globalStyles.homeScreen}>
        <Text style={globalStyles.text}>Info</Text>
        <Image
        source={assets/AlbahacaPlanta.jpg}
        style={{width: 200, height: 200}}
      /> 
        <Pressable style={globalStyles.button} onPress={() => navigation.navigate('ScreenPlantas2')}>
          <Text>
            Agregar Planta
          </Text>
        </Pressable>
      </View>
    )
}