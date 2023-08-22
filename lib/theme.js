import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bgGradient:mode('linear(to-r, white, pink)','linear(to-r, gray.600, black)')(props),

    }
  })
}

const components = {
  Link: {
    baseStyle: props => ({
      color: mode('#f58ec0', '#ffdbea')(props),
      textUnderlineOffset: 3
    })
  },
}

const fonts = {
  heading: "'PT Sans'"
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}


const theme = extendTheme({ config, styles, components, fonts})
export default theme