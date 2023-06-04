
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

const theme = {
  colors: {
    accent: '#da435f',
    // 검청색
    primary: '#0e0c30',
    link: "#2d63e2",
    linkHover: "#044a99",
  },
};

export default function App({ Component, pageProps }: AppProps) {

  return (
  <ThemeProvider theme={theme}>
    <Layout>
  <Component {...pageProps}  />
  </Layout>
  </ThemeProvider>

  )
}
