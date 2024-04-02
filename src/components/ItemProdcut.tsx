import { Alert, Pressable, View } from "react-native";
import StyledText from "./StyledText";
import { IProducts } from "../presentation/interfaces/IProducts";
import { button, product } from "../config/themes/appThemes";
import { useContext, useState } from "react";
import { ModalContext } from "../presentation/context/ModalContext";


const ItemProduct = ({ cantidad, id, imagen, nombre, persona, children }: IProducts) => {
  const [modal, setModal] = useState<boolean>(false)
  const { setModalVisible } = useContext(ModalContext) || { setModalVisible: () => { } }

  const stateButton = children ? 'Devolver' : 'Socilitar'

  return (
    <View style={product.container} key={id} >
      <View style={product.content}>
        <StyledText lgX2 semiBold tertiary>
          {nombre}
        </StyledText>
        {children}
        <StyledText lg tertiary>
          Cantidad: <StyledText primary semiBold lgX>{cantidad}</StyledText>
        </StyledText>
      </View>
      <Pressable style={button.primary} onPress={() => setModalVisible(true)}>
        <StyledText lg white semiBold>
          {stateButton}
        </StyledText>
      </Pressable>
    </View>
  )
}

export default ItemProduct