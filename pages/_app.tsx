import {CacheProvider, EmotionCache} from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import {ThemeProvider} from '@mui/material/styles'
import {AppProps} from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import Navbar from '../src/components/navbar/Navbar.component'
import createEmotionCache from '../src/createEmotionCache'
import theme from '../src/theme'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/globals.css'
import Copyright from '../src/Copyright'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Pitfalls Design</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div className="wrapper">
          <Navbar />
          <Component {...pageProps} />
          <Copyright />
        </div>
      </ThemeProvider>
    </CacheProvider>
  )
}
