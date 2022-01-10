import * as React from "react";
import Container from "@mui/material/Container";

import { retrieveStaticProps } from "../services/posts.page";
import PostsList from "../components/posts/posts.list";

export async function getStaticProps() {
  return await retrieveStaticProps(1);
}

export default function Index({ posts, pagination }) {
  return (
    <Container maxWidth="sm">
      <PostsList posts={posts} pagination={pagination} />
    </Container>
  );
}
