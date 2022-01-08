import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { getTotalPosts, getAllPostsForHome } from "../services/posts.services";
import PostBlurb from "../components/posts/posts.blurb";

export async function getStaticProps() {
  const posts = await getAllPostsForHome();
  const totalPosts = await getTotalPosts();
  return {
    props: {
      totalPosts: totalPosts,
      posts: posts,
    },
  };
}



export default function Index({ totalPosts, posts }) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
      <h4>Total: {totalPosts}</h4>
        {posts.map((post) => (
          <PostBlurb post={post} key={post.fields.slug} />
        ))}
      </Box>
    </Container>
  );
}
