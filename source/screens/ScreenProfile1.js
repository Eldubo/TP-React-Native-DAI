import React from "react";
import { View,Text,Image,Button, Pressable } from "react-native";
import globalStyles from '../globalStyles';
import Perfil from '../../assets/PerfilAvatar.jpg';
import { useNavigation } from '@react-navigation/native';
export default function ScreenProfile1 () {
  const navigation = useNavigation();
    return (    
        <View style={globalStyles.homeScreen}>
        <Image
          source={Perfil}
          style={{width: 200, height: 200}}
        /> 
        <Text style={globalStyles.text}>Susana</Text>
        <Text style={globalStyles.text}>CABA</Text>
        <Pressable style={globalStyles.Pressable} onPress={() => navigation.navigate('ScreenProfile2')}>
        <Text>
            Editar Perfil
          </Text>
        </Pressable>
      </View>
    )
}