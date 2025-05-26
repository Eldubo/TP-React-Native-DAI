import ScreenHome1 from "../screens/ScreenHome1"
import ScreenHome2 from "../screens/ScreenHome2"


export default function StackHomeNavigator() {
    return (
      <StackHome.Navigator>
        <StackA.Screen name="ScreenHome1" component={ScreenHome1} />
        <StackA.Screen name="ScreenHome2" component={ScreenHome2} />
      </StackHome.Navigator>    );
  }
  