import ScreenInfo1 from "../screens/ScreenInfo1";
import ScreenInfo2 from "../screens/ScreenInfo2";
export default function StackInfoNavigator() {
    return (
      <StackInfo.Navigator>
        <StackA.Screen name="ScreenInfo1" component={ScreenInfo1} />
        <StackA.Screen name="ScreenInfo1" component={ScreenInfo2} />
      </StackInfo.Navigator>
    );
  }
  