import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import StyledText from "../../components/StyledText"
import { colors } from "../../config/themes/appThemes"
import products from "../../data/products"
import ItemProduct from "../../components/ItemProdcut"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    backgroundColor: colors.creamPink,
    gap: 20,
  },
  header: {
    marginBottom: 16,
  }
})

const MyCartScreen = () => {
  const productWithPerson = () => {
    return (
      products.filter((product) => product.persona !== '')
    )
  }

  return (
    <View style={styles.container}>
      <StyledText lgX4 semiBold tertiary centeredText>Equipos equipos solicitados</StyledText>

      <SafeAreaView>
        <ScrollView>
          {
            productWithPerson().map((ob) => {
              return (
                <View style={{ marginVertical: 8 }}>
                  <ItemProduct
                    id={ob.id}
                    nombre={ob.nombre}
                    persona={ob.persona}
                    cantidad={ob.cantidad}
                  />
                </View>
              )
            })
          }
        </ScrollView>
      </SafeAreaView>

    </View>
  )
}

export default MyCartScreen