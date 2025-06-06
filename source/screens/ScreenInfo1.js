import React from "react";
import { View,Text,Image, Pressable } from "react-native";
import globalStyles from '../globalStyles';
import { useNavigation } from '@react-navigation/native';
import frutillas from '../../assets/FrutillasPlanta.jpeg';
export default function ScreenInfo1() {
    const navigation = useNavigation();
    let array = [];
    return (
      <View style={globalStyles.homeScreen}>
        <Text style={globalStyles.text}>Info</Text>
         <Image
                  source={frutillas}
                  style={{width: 200, height: 200}}
                /> 
        
      </View>
    );
  }