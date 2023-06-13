import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigation } from "../Utilities/StackRouter";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {StackNavigation.map((v, i) => {
          return <Stack.Screen key={i} name={v.name} component={v.component} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
