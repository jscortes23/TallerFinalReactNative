import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MyCartScreen from '../screens/MyCartScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={
      {
        headerShown: false
      }
    }>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={MyCartScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator