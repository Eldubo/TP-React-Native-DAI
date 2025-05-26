import ScreenPlantas1 from "../screens/ScreenPlantas1";
import ScreenPlantas2 from "../screens/ScreenPlantas2";
export default function StackPlantasNavigator() {
  return (
    <StackPlantas.Navigator>
      <StackA.Screen name="ScreenA1" component={ScreenPlantas1} />
      <StackA.Screen name="ScreenA2" component={ScreenPlantas2} />
    </StackPlantas.Navigator>
  );
}
