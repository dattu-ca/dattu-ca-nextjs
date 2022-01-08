import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { getTotalPosts, getAllPostsForHome } from "../services/posts.services";
import { getMetaData } from "../services/metadata.services";

import PostBlurb from "../components/posts/posts.blurb";
import Pagination from "../components/pagination";

export async function getStaticProps() {
  const metadata = await getMetaData();
  const totalPosts = await getTotalPosts();
  
  const limit = metadata.numberOfPostsPerPage;
  const skip = 0;

  const posts = await getAllPostsForHome(skip, limit);

  return {
    props: {
      posts: posts,
      pagination: {
        skip: skip,
        limit: limit,
        total: totalPosts,
        urls: {
          first: "/",
          pages: "/home/[currentPage]",
          param: "[currentPage]",
        },
      },
    },
  };
}

export default function Index({ posts, pagination }) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        {posts.map((post) => (
          <PostBlurb post={post} key={post.fields.slug} />
        ))}
        <Pagination {...pagination} />
      </Box>
    </Container>
  );
}
