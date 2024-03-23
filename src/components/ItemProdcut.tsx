import { Image, View } from "react-native";
import { IProducts } from "../presentation/interfaces/Products";
import StyledText from "./StyledText";

const ItemProduct = ({ cantidad, id, imagen, nombre }: IProducts) => {
  return (
    <View key={id}>
      <View>
      </View>
      <StyledText lgX4 semiBold tertiary>
        {nombre}
      </StyledText>
      <StyledText lgX4 semiBold tertiary>
        {cantidad}
      </StyledText>
    </View>
  )
}

export default ItemProduct