import React from 'react'
import { AppProps } from 'next/app'
import NavTabs from '../components/Tab'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import '../styles/styles.scss'

const App = ({ Component, pageProps }: AppProps) => (
  <div className={utilStyles.backgroundColor}>
    <header className={styles.header}>
      <NavTabs />
    </header>
    <Component {...pageProps} />
  </div>
)

export default App
