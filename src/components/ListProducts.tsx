import { FlatList, SafeAreaView, Text, View } from "react-native"
import ItemProduct from "./ItemProdcut"
import products from "../data/products"

const ListProdcut = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={products}
        ItemSeparatorComponent={() => <Text />}
        renderItem={({ item: { id, nombre, cantidad, persona } }) => {
          return (
            <ItemProduct
              id={id}
              cantidad={cantidad}
              nombre={nombre}
              persona={persona}
            />
          )
        }}
      />
    </SafeAreaView>
  )
}

export default ListProdcut