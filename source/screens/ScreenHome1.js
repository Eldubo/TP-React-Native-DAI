import React from "react";
import { View,Text,Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
export default function ScreenHome1 () {
    const navigation = useNavigation();

    return (
        <>
    <View>
    <Image>
          logo
      </Image>
      <Text style={styles.text}>Bienvenido al hogar de los jardineros</Text>
      <Pressable onPress={() => navigation.navigate('ScreenHome2')}>
        <Text>Comenzar</Text>
      </Pressable>
    </View>
    </>
  );
}
