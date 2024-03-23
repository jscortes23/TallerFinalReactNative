import { StyleSheet, View } from "react-native"
import StyledText from "../../components/StyledText"
import { colors } from "../../config/themes/appThemes"
import ListProdcut from "../../components/ListProducts"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    backgroundColor: colors.creamPink,
  },
  header: {
    marginBottom: 16,
  }
})

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StyledText lgX4 semiBold tertiary centeredText>
          Taller Final
        </StyledText>
      </View>
      <ListProdcut />
    </View>
  )
}

export default HomeScreen