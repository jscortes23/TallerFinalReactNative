import { StatusBar, Text, View } from "react-native"
import HomeScreen from "./presentation/screens/HomeScreen"
import TabNavigator from "./presentation/navigations/TabNavigator"

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <TabNavigator />
      <StatusBar />
    </View>
  )
}

export default Main