import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitterSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons'

const name = 'Ryunosuke Nagase'
const HomeView = (props: any) => (
  <Layout>
    <div className={styles.header}>
      <img
        src="/images/profile.png"
        className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
        alt={name}
      />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
      <section>
        <a href="https://twitter.com/nosuke926" target="_blank">
          <FontAwesomeIcon
            icon={faTwitterSquare}
            className={styles.socialIcon}
          />
        </a>
        <a href="https://github.com/nosuke0926" target="_blank">
          <FontAwesomeIcon
            icon={faGithubSquare}
            className={styles.socialIcon}
          />
        </a>
      </section>
      <section className={`${utilStyles.headingMd}`}>
        <p>
          長崎県出身
          <br />
          九州大学経済学部 経済経営学科卒
        </p>
        <p>
          大学卒業後、金融系のシステム会社に入社。
          <br />
          開発マネジメントなどの上流工程に携わったのちWeb開発企業に転職。
        </p>
        <p>
          現在はフリーランスとしてアプリの開発を行いながら、個人で複数のサービスの開発・運営を行う。
        </p>
      </section>
    </div>
  </Layout>
)

export default HomeView
