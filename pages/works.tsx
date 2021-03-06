import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import TransitionsModal from '../components/modal'

const WorksView = (props: any) => (
  <Layout>
    <div className={styles.header}>
      <p>世の中を少しだけ面白く、便利にするサービスを開発しています。</p>
      <section className={utilStyles.headingMd}>
        <p>
          <TransitionsModal
            src="/images/products/subsc.png"
            alt="アプリ（さぶすく）"
            description="サブスクリプションを賢く管理するアプリ"
            appTitle="さぶすく"
            useTechnology={['Flutter', 'Firebase', 'RevenueCat']}
            appDescription="サービスの無料期間終了前にプッシュ通知でお知らせします。毎月・毎年のサブスクリプションサービスにいくらお金を使っているのかもグラフで可視化します。"
            iosUrl="https://apps.apple.com/jp/app/id1506451600?mt=8"
            androidUrl="https://play.google.com/store/apps/details?id=com.nosuke.subscriptionManagement&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            type="native"
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
            type="native"
          />
        </p>
        <p>
          <TransitionsModal
            src="/images/products/yomoo.png"
            alt="アプリ（Yomoo）"
            description="ニューモフィズムな読書管理アプリ"
            appTitle="Yomoo"
            useTechnology={['Flutter', 'SQLite', 'RevenueCat']}
            appDescription="2020年~のUIデザインのトレンドであるNeumorphismを取り入れた読書管理アプリです。楽天ブックスAPI、openBDと連携してバーコード読み取りからの書籍登録が可能です。"
            iosUrl="https://apps.apple.com/jp/app/id1516860157?mt=8"
            androidUrl="https://play.google.com/store/apps/details?id=com.nosuke.yomoo&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            type="native"
          />
        </p>
        <p>
          <TransitionsModal
            src="/images/products/oshiPay.png"
            alt="アプリ（推しPay）"
            description="推しへの愛を管理&シェアするアプリ"
            appTitle="推しPay"
            useTechnology={['Flutter', 'Firebase', 'RevenueCat']}
            appDescription="「推し」にいくらお金を使っているのかを記録&SNSにシェアできるアプリです。"
            iosUrl="https://apps.apple.com/jp/app/id1523768983?mt=8"
            androidUrl="https://play.google.com/store/apps/details?id=com.nosuke.oshi_pay&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            type="native"
          />
        </p>
        <p>
          <TransitionsModal
            src="/images/products/tubenote.png"
            alt="アプリ（TubeNote）"
            description="YouTubeを見ながらメモできるアプリ"
            appTitle="TubeNote"
            useTechnology={['Flutter', 'Firebase', 'RevenueCat', 'Algolia']}
            appDescription="YouTubeを見ながらリアルタイムにメモできるアプリです。メモは動画のURLとともにSNSにシェアできます。現在日本語・英語・韓国語に対応しています。"
            iosUrl="https://apps.apple.com/jp/app/id1535634801?mt=8"
            productHuntUrl="https://www.producthunt.com/posts/tubenote?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tubenote"
            productHuntPostId="279810"
            androidUrl="https://play.google.com/store/apps/details?id=com.nosuke.movieMemo&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            type="native"
          />
        </p>
        <p>
          <TransitionsModal
            src="/images/products/migru.png"
            alt="アプリ（ミグル）"
            description="簡単に頭痛を記録するアプリ"
            appTitle="ミグル"
            useTechnology={['Flutter', 'Firebase', 'RevenueCat']}
            appDescription="頭痛の記録・振り返りに特化したシンプルなアプリです。"
            iosUrl="https://apps.apple.com/jp/app/id1564686045?mt=8"
            androidUrl="https://play.google.com/store/apps/details?id=com.nosuke.migraine&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            type="native"
          />
        </p>
        <p>
          <TransitionsModal
            src="/images/products/music-store-reviews/cover.jpeg"
            alt="Webアプリ（MusicStore Reviews）"
            description="楽器店レビューサイト"
            appTitle="MusicStore Reviews"
            useTechnology={['Laravel', 'Vue.js', 'Python']}
            appDescription="日本初の楽器店レビューサイト。楽器店のデータはWebスクレイピングで取得しました。一部Vue.jsを使用しています。"
            webUrl="https://musicstore-reviews.com/"
            type="web"
          />
        </p>
        <p>
          <TransitionsModal
            src="/images/products/chatroooom/chatroooom.png"
            alt="Webアプリ（ChatRoooom）"
            description="クローズドなチャットリンクを作成できるWebアプリ"
            appTitle="ChatRoooom"
            useTechnology={['Vue.js', 'Nuxt.js', 'Firebase']}
            appDescription="ChatRoooomは簡単に人数限定のチャットルームを作成できるサービスです。チャット内容は24時間後に削除されるので、プライバシーも安心です。"
            webUrl="https://chatroooom.net/"
            type="web"
          />
        </p>
      </section>
    </div>
  </Layout>
)

export default WorksView
