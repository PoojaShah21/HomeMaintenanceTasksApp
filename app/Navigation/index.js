import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../Screens/Onboarding/index';
import Signup from '../Screens/Signup/index';
import AddTask from '../Screens/AddTask/index';
import TaskList from '../Screens/TaskList/index';

const NavStart = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Onboarding" component={Onboarding}></Stack.Screen>
        <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        <Stack.Screen name="AddTask" component={AddTask}></Stack.Screen>
        <Stack.Screen name="TaskList" component={TaskList}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavStart;
