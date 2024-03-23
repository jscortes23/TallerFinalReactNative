import { StyleSheet } from "react-native"

export const colors = {
  primary: '#F28482',
  secondary: '#84A59D',
  tertiary: '#3D405B',
  white: '#FFFFFF',
  lightPink: '#F5CAC3',
  lightBlue: '#A9D7DA',
  lightYellow: '#FFEF92',
  lightGrey: '#B6D7CF',
}

export const colorBasic = StyleSheet.create({
  primary: {
    color: colors.primary,
  },
  secondary: {
    color: colors.secondary
  },
  tertiary: {
    color: colors.tertiary
  },
  white: {
    color: colors.white
  },
  lightPink: {
    color: colors.lightPink
  },
  lightBlue: {
    color: colors.lightBlue
  },
  lightYellow: {
    color: colors.lightYellow
  },
  lightGrey: {
    color: colors.lightGrey
  }
})

export const textFallback = StyleSheet.create({
  text: {
    fontSize: 12,
    color: '#000000'
  },
})

export const fontSize = StyleSheet.create({
  smX3: {
    fontSize: 6
  },
  smX2: {
    fontSize: 8
  },
  smX: {
    fontSize: 10
  },
  sm: {
    fontSize: 12
  },
  md: {
    fontSize: 14
  },
  lg: {
    fontSize: 16
  },
  lgX: {
    fontSize: 18
  },
  lgX2: {
    fontSize: 24
  },
  lgX3: {
    fontSize: 28
  },
  lgX4: {
    fontSize: 40
  },
})

export const fontWeight = StyleSheet.create({
  regular: {
    fontWeight: '400'
  },
  semiBold: {
    fontWeight: '600'
  },
})
