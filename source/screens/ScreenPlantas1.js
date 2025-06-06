import React from "react";
import { View,Text,Image, Pressable } from "react-native";
import globalStyles from '../globalStyles';
import Albahaca from '../../assets/AlbahacaPlanta.jpg';
import { useNavigation } from '@react-navigation/native';
export default function ScreenPlantas1 () {
    const navigation = useNavigation();
    let Plantas = [];
    return (
        <View style={globalStyles.homeScreen}>
        <Text style={globalStyles.text}>Info</Text>
        <Image
        source={Albahaca}
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