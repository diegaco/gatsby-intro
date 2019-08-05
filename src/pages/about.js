import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>This is my personal website</p>
      <Link to="/">&larr; go to homepage</Link>
    </Layout>
  );
};
