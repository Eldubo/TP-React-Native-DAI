import React from "react";
import { View,Text,Image } from "react-native";
import globalStyles from '../globalStyles';


export default function ScreenPlantas2 () {
    return (
        <View style={globalStyles.homeScreen}>
        <Text style={globalStyles.text}>Info</Text>
        <Image
          source={assets/AlbahacaPlanta.jpg}
          style={{width: 200, height: 200}}
        /> 
      </View>
    )
}