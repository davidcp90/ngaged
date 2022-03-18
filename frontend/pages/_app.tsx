import '../styles/globals.css'
import { createTheme, NextUIProvider } from "@nextui-org/react"
import type { AppProps } from 'next/app'



const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      // #38ACFE #00C7FF #00DDE6 #1BEDBA #A0F78D #F9F871
      // #38ACFE #6095F2 #817DDF #9961C3 #A943A0 #AF1B78
      primaryLight: "#6095F2",
      primary:
        "linear-gradient(112deg, #38ACFE -25%, #00C7FF -10%, #00DDE6 95%)",
      primaryDark: "#0078C5",

      gradient:
        "linear-gradient(112deg, #A943A0 -25%, #A943A0 -10%, #38ACFE 95%)",
    },
    space: {},
    fonts: {},
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
  <Component {...pageProps} />
  </NextUIProvider>
  )
}

export default MyApp
