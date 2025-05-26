import React from "react";
import { View,Text,Image, Pressable } from "react-native";
export default function ScreenHome1 () {
    const navigation = useNavigation();

    return (
        <>
    <View style={styles.homeScreen}>
    <Image>
          logo
      </Image>
      <Text style={styles.text}>Bienvenido al hogar de los jardineros</Text>
      <Pressable onPress={}>
        <Text>Comenzar</Text>
      </Pressable>
    </View>
    </>
  );
}
