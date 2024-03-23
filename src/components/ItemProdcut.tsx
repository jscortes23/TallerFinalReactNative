import { Alert, Pressable, View } from "react-native";
import StyledText from "./StyledText";
import { IProducts } from "../presentation/interfaces/IProducts";
import { product } from "../config/themes/appThemes";

const ItemProduct = ({ cantidad, id, imagen, nombre, persona, children }: IProducts) => {
  const handlePress = () => {
    Alert.alert('Solicitud enviada', `Se ha solicitado ${nombre}`)
  }

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
      <Pressable style={product.button} onPress={handlePress}>
        <StyledText lg white semiBold>
          {stateButton}
        </StyledText>
      </Pressable>
    </View>
  )
}

export default ItemProduct