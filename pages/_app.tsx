
import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout';

// const lightTheme = {
//   colors: {
//     background: "#ffffff",
//     text: "#000000",
//     primary: "#0070f3",
//   },
// };

const darkTheme = {
  colors: {
    accent: '#fcfc06',
    text: "#ffffff",
    link: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {

  return (
  <ThemeProvider theme={darkTheme}>
    <Layout>
  <Component {...pageProps}  />
  </Layout>
  </ThemeProvider>

  )
}
