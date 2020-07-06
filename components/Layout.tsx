import Head from 'next/head'
import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
// import Link from 'next/link'

export const siteTitle = 'のすけのポートフォリオサイト'

export default function Layout({ children }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Webエンジニアとして活動している、Nagese Ryunosukeのポートフォリオサイトです。"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>{children}</main>
    </div>
  )
}
