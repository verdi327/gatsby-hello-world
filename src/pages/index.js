import React from "react"
import Header from '../components/header'
import { Link } from "gatsby"


export default () => {
  return <div style={{color: 'purple'}}>
    <Link to='/contact/'>Contact</Link>
    <Header headerText='Index Page!'></Header>
    <p>hope this is worth it</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
}
