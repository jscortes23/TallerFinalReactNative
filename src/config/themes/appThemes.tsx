import { StyleSheet } from "react-native"

export const colors = {
  primary: '#F28482',
  secondary: '#84A59D',
  tertiary: '#3D405B',
  white: '#FFFFFF',
  lightPink: '#F5CAC3',
  creamPink: '#f7f3e7',
  lightBlue: '#A9D7DA',
  lightYellow: '#FFEF92',
  lightGrey: '#B6D7CF',
}

export const center = StyleSheet.create({
  text: {
    textAlign: 'center'
  }
})

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

export const product = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    color: colors.secondary,
    flexDirection: 'row',
    columnGap: 20,
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginHorizontal: 16,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    elevation: 3
  },
  content: {
    flex: 1,
    rowGap: 4,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  }
})