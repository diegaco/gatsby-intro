import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Link } from 'gatsby';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/PostPreview';
import Insta from '../components/Insta';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2> Read my Blog</h2>
        {posts.map(post => (
          <PostPreview post={post} key={post.slug} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
