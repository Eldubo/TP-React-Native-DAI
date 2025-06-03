import React from "react";
import { View,Text,Image } from "react-native";
import globalStyles from '../globalStyles';


export default function ScreenHome2() {
    const navigation = useNavigation();
    return (
      <View style={globalStyles.homeScreen}>
        <Text style={globalStyles.text}>HOME 2</Text>
      </View>
    );
  }
  