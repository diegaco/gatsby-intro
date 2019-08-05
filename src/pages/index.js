import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/postPreview';
import Insta from '../components/insta';

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
