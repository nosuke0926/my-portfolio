import Head from 'next/head'
import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
// import Link from 'next/link'

export const siteTitle = 'のすけのポートフォリオサイト'

export default function Layout({ children }: any) {
  const trackingId: string = process.env.ga_tracking_id!
  const description: string =
    'Webエンジニアとして活動している、Nagese Ryunosukeのポートフォリオサイトです。'
  const url: string = 'https://nosuke-portfolio.web.app/'
  const image = 'https://nosuke-portfolio.web.app/images/portfolio_ogp.png'
  return (
    <div className={styles.container}>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){ window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${trackingId}');})`,
          }}
        />
        <title>のすけのポートフォリオ</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@nosuke926" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        {/* <link rel="canonical" href={url} /> */}
        {/* <link rel="apple-touch-icon" href={image} /> */}
        <meta
          name="google-site-verification"
          content="7LNV_CLMRiHwoVKdUbRlCdyJ0TIhYsWJh2PT3cJEO9w"
        />
      </Head>

      <main>{children}</main>
    </div>
  )
}
