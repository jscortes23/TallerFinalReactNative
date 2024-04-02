import { Alert, FlatList, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import StyledText from "../../components/StyledText"
import { button, colors, home, modal, product } from "../../config/themes/appThemes"
import ListProdcut from "../../components/ListProducts"
import products from "../../data/products"
import ItemProduct from "../../components/ItemProdcut"
import { useRef, useState } from "react"
import OrderModal from "../../components/OrderModal"

const HomeScreen = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [nombre, setNombre] = useState<string>('')
  const [productName, setProdcutName] = useState<string>('')
  const [cantidad, setCantidad] = useState<number>(0);

  const cantidadIncrement = () => {
    setCantidad(cantidad + 1)
  }

  const cantidadDecrement = () => {
    setCantidad(cantidad - 1)
  }

  const handleSubmit = () => {
    setModalVisible(!modalVisible)
    Alert.alert(nombre, `Tu solicitud de ${productName}`)


    products.map((product) => {
      if (product.nombre === productName) {
        product.persona = nombre
        product.cantidad = product.cantidad - cantidad
      }
    })
    navigation.navigate('Cart', {
      persona: nombre,
      cantidad: cantidad,
    });
  }

  const handleChooseProduct = (productName: string) => {
    setModalVisible(true)
    setProdcutName(productName)
  }

  return (
    <View style={home.container}>
      {modalVisible &&
        <View style={modal.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={modal.centeredView}>
              <View style={modal.modalView}>
                <View style={modal.content}>
                  <StyledText lgX centeredText>¡Haz tu solicitud!</StyledText>
                  <TextInput
                    style={modal.input}
                    placeholder="Ingresa tu nombre"
                    keyboardType="ascii-capable"
                    onChangeText={(text) => setNombre(text)}
                  />
                  <View>
                    <View style={modal.count}>
                      <Pressable style={button.more} onPress={cantidadDecrement}>
                        <StyledText lgX4 lightPink>-</StyledText>
                      </Pressable>
                      <StyledText lgX2 semiBold tertiary>{cantidad}</StyledText>
                      <Pressable style={button.less} onPress={cantidadIncrement}>
                        <StyledText lgX4 white>+</StyledText>
                      </Pressable>
                    </View>
                  </View>
                </View>
                <Pressable
                  style={button.primary}
                  onPress={handleSubmit}>
                  <StyledText semiBold white lg>Confirmar</StyledText>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>}
      <View style={home.header}>
        <StyledText lgX4 semiBold tertiary centeredText>
          Taller Final
        </StyledText>
      </View>
      <SafeAreaView>
        <FlatList
          data={products}
          ItemSeparatorComponent={() => <Text />}
          renderItem={({ item: { id, nombre, cantidad, persona } }) => {
            return (
              <View style={product.container} key={id} >
                <View style={product.content}>
                  <StyledText lgX2 semiBold tertiary>
                    {nombre}
                  </StyledText>

                  <StyledText lg tertiary>
                    Cantidad: <StyledText primary semiBold lgX>{cantidad}</StyledText>
                  </StyledText>
                </View>
                <Pressable style={button.primary} onPress={() => handleChooseProduct(nombre)}>
                  <StyledText lg white semiBold>
                    Socilitar
                  </StyledText>
                </Pressable>
              </View>
            )
          }}
        />
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen