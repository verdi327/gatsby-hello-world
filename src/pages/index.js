import React from "react"
import Header from '../components/header'
import Layout from "../components/layout"
import User from '../components/users/user'
import SEO from '../components/seo'

export default () => {
  return <Layout>
    <SEO 
      title='V360 home page'
      description='V360 is a top tier PR and Marketing agency in Baltimore'
    />
    <Header headerText='Index Page!'></Header>
    <p>hope this is worth it</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Layout>
}
