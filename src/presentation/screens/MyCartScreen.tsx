import { Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, TextInput, View } from "react-native"
import StyledText from "../../components/StyledText"
import { colors } from "../../config/themes/appThemes"
import products from "../../data/products"
import ItemProduct from "../../components/ItemProdcut"
import { useEffect, useState } from "react"
import { IProducts } from "../interfaces/IProducts"

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

  const [productWithPerson, setProductWithPerson] = useState<IProducts[]>([])
  useEffect(() => {
    setProductWithPerson(products.filter((product) => product.persona !== ''))
  }, [])

  return (
    <View style={styles.container}>
      <StyledText lgX4 semiBold tertiary centeredText>Equipos equipos solicitados</StyledText>
      <SafeAreaView>
        <ScrollView>
          {
            productWithPerson.map((ob) => {
              return (
                <View key={ob.id} style={{ marginVertical: 8 }}>
                  <ItemProduct
                    id={ob.id}
                    nombre={ob.nombre}
                    cantidad={ob.cantidad}
                  >
                    <StyledText lg >Solicitado por: {ob.persona}</StyledText>
                  </ItemProduct>
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