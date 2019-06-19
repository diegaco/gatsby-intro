import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello World</p>
    <Link to="/about">Learn about me &rarr;</Link>
  </Layout>
);
