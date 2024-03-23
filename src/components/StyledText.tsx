import React from 'react'
import { Text } from 'react-native'
import { StyledTextProps } from '../presentation/interfaces/StyledTextProps'
import { colorBasic, fontSize, fontWeight, textFallback } from '../config/themes/appThemes'

export default function StyledText({ children, smX3, smX2, smX, sm, md, lg, lgX, lgX2, lgX3, lgX4, regular, semiBold, primary, secondary, tertiary, white, lightPink, lightBlue, lightYellow, lightGrey, style, restOfProps }: StyledTextProps) {

  const textStyles: any = [
    { ...textFallback.text },
    smX3 && fontSize.smX3,
    smX2 && fontSize.smX2,
    smX && fontSize.smX,
    sm && fontSize.sm,
    md && fontSize.md,
    lg && fontSize.lg,
    lgX && fontSize.lgX,
    lgX2 && fontSize.lgX2,
    lgX3 && fontSize.lgX3,
    lgX4 && fontSize.lgX4,
    regular && fontWeight.regular,
    semiBold && fontWeight.semiBold,
    primary && colorBasic.primary,
    secondary && colorBasic.secondary,
    tertiary && colorBasic.tertiary,
    white && colorBasic.white,
    lightPink && colorBasic.lightPink,
    lightBlue && colorBasic.lightBlue,
    lightYellow && colorBasic.lightYellow,
    lightGrey && colorBasic.lightGrey,
    { ...style }
  ]

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}