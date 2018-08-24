import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Chuloo = () => (
  <Layout>
    <h1>Hi Chuloo</h1>
    <p>Welcome to your Chuloo Page.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>`
    <p></p>
    <Link to="/">Go to Home</Link>`
  </Layout>
)

export default Chuloo
