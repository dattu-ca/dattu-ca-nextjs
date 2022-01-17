import * as React from "react";
import Container from "@mui/material/Container";

import { retrievePostsList } from "../../services/posts.services";
import { retrievePost } from "../../services/post.services";

import PostDetail from '../../components/post/post.detail';

export async function getStaticPaths() {
  const postsList = await retrievePostsList();

  const paths = postsList.map((post) => ({
    params: {
      slug: post.fields.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(props) {
  const { params } = props;
  const { slug } = params;
  const post = await retrievePost(slug);

  return {
    props: {
      post: post,
    },
  };
}

export default function Index({ post }) {
  return (
    <Container maxWidth="sm">
      <PostDetail post={post} />
    </Container>
  );
}
