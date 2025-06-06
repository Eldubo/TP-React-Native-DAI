import React from "react";
import { View,Text,Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../globalStyles';
import logo from '../../assets/logo.png';
export default function ScreenHome1 () {
    const navigation = useNavigation();

    return (
        <>
    <View>
     <Image
          source={logo}
          style={{width: 200, height: 200}}
        />

      <Text style={globalStyles.text}>Bienvenido al hogar de los jardineros</Text>
      <Pressable onPress={() => navigation.navigate('ScreenHome2')}>
        <Text>Comenzar</Text>
      </Pressable>
    </View>
    </>
  );
}
