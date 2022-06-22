import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Configuration Analyst</title>
        <meta property="og:title" content="Dynamic Configuration Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
