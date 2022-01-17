import * as React from "react";
import Container from "@mui/material/Container";


import { retrieveStaticPaths, retrieveStaticProps } from "../../services/post.page";
import PostDetail from '../../components/post/post.detail';

export async function getStaticPaths() {
  return await retrieveStaticPaths();
}
export async function getStaticProps(props) {
  return await retrieveStaticProps(props);
}

export default function Index({ post }) {
  return (
    <Container maxWidth="sm">
      <PostDetail post={post} />
    </Container>
  );
}
