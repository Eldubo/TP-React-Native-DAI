import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome1 from "../screens/ScreenHome1";
import ScreenHome2 from "../screens/ScreenHome2";

const Stack = createNativeStackNavigator();

export default function StackHomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenHome1" component={ScreenHome1} />
      <Stack.Screen name="ScreenHome2" component={ScreenHome2} />
    </Stack.Navigator>
  );
}
