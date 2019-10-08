import React from "react"
import Header from '../components/header'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO 
      title='V360 about us page'
      description='See why V360 is a leader in PR and Marketing in Baltimore'
    />
    <Header headerText='About Page!'></Header>
    <p>Such wow. Very React.</p>
  </Layout>
)