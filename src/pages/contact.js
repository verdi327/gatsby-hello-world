import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({data}) => {
  return <Layout>
    <SEO 
      title='V360 contact page'
      description='Contact information for V360'
    />
    <Header headerText='Contact'></Header>
    <p>send us a message</p>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
  </Layout>
}

