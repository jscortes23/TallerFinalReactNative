import { Alert, Pressable, View } from "react-native";
import StyledText from "./StyledText";
import { IProducts } from "../presentation/interfaces/IProducts";
import { product } from "../config/themes/appThemes";

const ItemProduct = ({ cantidad, id, imagen, nombre, persona }: IProducts) => {
  const handlePress = () => {
    Alert.alert('Solicitud enviada', `Se ha solicitado ${nombre}`)
  }

  const isPerson = () => {
    return (
      persona && <StyledText lg>Solicitado por {persona}</StyledText>
    )
  }

  return (
    <View style={product.container} key={id} >
      <View style={product.content}>
        <StyledText lgX2 semiBold tertiary>
          {nombre}
        </StyledText>
        {isPerson()}
        <StyledText lg tertiary>
          Cantidad: <StyledText primary semiBold lgX>{cantidad}</StyledText>
        </StyledText>
      </View>
      <Pressable style={product.button} onPress={handlePress}>
        <StyledText lg white semiBold>Solicitar</StyledText>
      </Pressable>
    </View>
  )
}

export default ItemProduct