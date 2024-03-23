import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import StyledText from "../../components/StyledText"
import products from "../../data/products"
import ItemProduct from "../../components/ItemProdcut"

const HomeScreen = () => {
  return (
    <View>
      <View>
        <Image />
      </View>
      <StyledText lgX4 semiBold tertiary>
        Taller Final
      </StyledText>
      <SafeAreaView >
        <FlatList
          data={products}
          ItemSeparatorComponent={() => <Text />}
          renderItem={({ item: { id, nombre, cantidad } }) => {
            return (
              <ItemProduct
                id={id}
                cantidad={cantidad}
                nombre={nombre}
              />
            )
          }}
        />
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen