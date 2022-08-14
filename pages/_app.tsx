import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }:AppProps){
  return(
    <ThemeProvider attribute='class'>
      <Component {...pageProps}></Component>
    </ThemeProvider>
  )
}


export default MyApp
