import React from "react";
import { View,Text,Image, Pressable } from "react-native";
export default function ScreenInfo1() {
    const navigation = useNavigation();
    let array = [];
    return (
      <View style={styles.homeScreen}>
        <Text style={styles.text}>Info</Text>
        <Image>
          producto
        </Image>
        
      </View>
    );
  }