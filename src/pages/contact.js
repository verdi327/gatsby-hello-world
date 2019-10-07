import React from 'react'
import Header from '../components/header'
import { Link } from 'gatsby'

export default () => {
  return <div style={{color: 'teal'}}>
    <Link to="/">Home</Link>
    <Header headerText='Contact'></Header>
    <p>send us a message</p>
  </div>
}
