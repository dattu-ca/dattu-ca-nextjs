import Container from "@mui/material/Container";

import { retrieveStaticProps, retrieveStaticPaths } from "../../services/posts.pages";
import PostsListContainer from "../../components/posts/posts.list.container";

export async function getStaticPaths() {
  return await retrieveStaticPaths();
}

export async function getStaticProps(props) {
  return await retrieveStaticProps(props);
}

export default function Index({ posts, pagination }) {
  return (
    <Container maxWidth="sm">
      <PostsListContainer posts={posts} pagination={pagination} />
    </Container>
  );
}
