import Layout from '../components/Layout'
import React from 'react'
import FormPropsTextFields from '../components/textField'
import utilStyles from '../styles/utils.module.css'
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const ContactView = (props: any) => (
  <Layout>
    <p className={utilStyles.center}>
      お問い合わせは下記フォームからお願いいたします。
    </p>
    {FormPropsTextFields()}
  </Layout>
)

export default ContactView
