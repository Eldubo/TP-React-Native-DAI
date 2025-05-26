import React from "react";
import { View,Text,Image,Button, Pressable } from "react-native";
export default function ScreenProfile1 () {
    return (    
        <View style={styles.homeScreen}>
        <Image>
        
        </Image>
        <Text style={styles.text}>Susana</Text>
        <Text style={styles.text}>CABA</Text>
        <Pressable style={styles.Pressable} onPress={}>
        <Text>
            Editar Perfil
          </Text>
        </Pressable>
      </View>
    )
}