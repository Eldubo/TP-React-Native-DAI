import React from "react";
import { View,Text,Image, Pressable } from "react-native";
export default function ScreenPlantas1 () {
    const navigation = useNavigation();
    let Plantas = [];
    return (
        <View style={styles.homeScreen}>
        <Text style={styles.text}>Info</Text>
        <Image>
          producto
        </Image>
        <Pressable style={styles.button} onPress={() => navigation.navigate('ScreenPlantas2')}>
          <Text>
            Agregar Planta
          </Text>
        </Pressable>
      </View>
    )
}