import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import TransitionsModal from '../components/modal'

const WorksView = (props: any) => (
  <Layout>
    <div className={styles.header}>
      <section className={utilStyles.headingMd}>
        <p>
          <TransitionsModal
            src="/images/products/subsc.png"
            alt="アプリ（さぶすく）"
            description="サブスクリプションを賢く管理するアプリ"
            appTitle="さぶすく"
            useTechnology={[
              'Flutter',
              'Firebase(Cloud Firestore, Cloud Functions)',
            ]}
            appDescription="サービスの無料期間終了前にプッシュ通知でお知らせします。毎月・毎年のサブスクリプションサービスにいくらお金を使っているのかもグラフで可視化します。"
            iosUrl="https://apps.apple.com/jp/app/id1506451600?mt=8"
            androidUrl="https://play.google.com/store/apps/details?id=com.nosuke.subscriptionManagement&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          />
        </p>
        <p>
          <TransitionsModal
            src="/images/products/rapid.png"
            alt="アプリ（爆速Todoメモ）"
            description="起動して2秒でメモできるアプリ"
            appTitle="爆速Todoメモ"
            useTechnology={['Flutter', 'SQLite']}
            appDescription="アプリを起動すると同時にキーボードが開きます。また記入と閲覧が同時にできるよう一画面を分割した新しいメモアプリです。"
            iosUrl="https://apps.apple.com/jp/app/id1511398926?mt=8"
            androidUrl="https://play.google.com/store/apps/details?id=com.nosuke.rapid&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          />
        </p>
        <p>
          <TransitionsModal
            src="/images/products/yomoo.png"
            alt="アプリ（Yomoo）"
            description="ニューモフィズムな読書管理アプリ"
            appTitle="Yomoo"
            useTechnology={['Flutter', 'SQLite']}
            appDescription="2020年のトレンドのUIデザインであるNeumorphismを取り入れた読書管理アプリです。楽天ブックスAPI、openBDと連携してバーコード読み取りからの書籍登録が可能です。"
            iosUrl="https://apps.apple.com/jp/app/id1516860157?mt=8"
          />
        </p>
        {/* <p>
          <img
            src="/images/products/music-store-reviews/cover.jpeg"
            className={`${styles.webApplicationImage} ${utilStyles}`}
            alt="楽器店のレビューサイト"
          />
        </p> */}
      </section>
    </div>
  </Layout>
)

export default WorksView
