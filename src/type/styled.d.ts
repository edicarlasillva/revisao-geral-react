import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      backgroundColor: string
      inputColor: string
      cardColor: string
      textColor: string
      title: string
    }
  }
}
