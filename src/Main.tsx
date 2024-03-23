import { StatusBar, Text, View } from "react-native"
import HomeScreen from "./presentation/screens/HomeScreen"

const Main = () => {
  return (
    <View>
      <StatusBar />
      <HomeScreen />
    </View>
  )
}

export default Main