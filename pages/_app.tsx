import React from 'react'
import { AppProps } from 'next/app'
import NavTabs from '../components/Tab'
import styles from '../components/layout.module.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <header className={styles.header}>
      <NavTabs />
    </header>
    <Component {...pageProps} />
  </>
)

export default App
