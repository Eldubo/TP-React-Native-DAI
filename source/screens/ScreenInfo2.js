import React from "react";
import { View,Text,Image, Pressable } from "react-native";
import globalStyles from '../globalStyles';
import Albahaca from '../../assets/AlbahacaPlanta.jpg';
export default function ScreenInfo2 () {
    return (
      <View style={globalStyles.homeScreen}>
        <Text style={globalStyles.text}>Info</Text>
        <Image
          source={Albahaca}
          style={{width: 200, height: 200}}
        /> 
        
      </View>
    )
  }