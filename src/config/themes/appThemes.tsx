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
})

export const button = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  more: {
    backgroundColor: colors.white,
    borderRadius: 99999,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.lightPink,
  },
  less: {
    backgroundColor: colors.primary,
    borderRadius: 999999,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.white
  }
})

export const modal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    rowGap: 18,
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    padding: 8,
    borderRadius: 8,
    borderColor: colors.lightPink,
    borderWidth: 1,
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    columnGap: 20,
  },
});

export const home = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    backgroundColor: colors.creamPink,
  },
  header: {
    marginBottom: 16,
  }
})