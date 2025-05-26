import ScreenProfile1 from "../screens/ScreenProfile1";
import ScreenProfile2 from "../screens/ScreenProfile2";
export default function StackProfileNavigator() {
    return (
      <StackProfile.Navigator>
        <StackA.Screen name="ScreenProfile1" component={ScreenProfile1} />
        <StackA.Screen name="ScreenProfile2" component={ScreenProfile2} />
      </StackProfile.Navigator>
    );
  }
  