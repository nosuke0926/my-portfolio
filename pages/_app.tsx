import React from 'react'
import { Container, AppProps } from 'next/app'
import NavTabs from '../components/Tab'
import styles from '../components/layout.module.css'

const App = ({ Component, pageProps }: AppProps) => (
  <Container>
    <header className={styles.header}>
      <NavTabs />
    </header>
    <Component {...pageProps} />
  </Container>
)

export default App
