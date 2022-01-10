import Container from "@mui/material/Container";

import { retrieveStaticProps, retrieveStaticPaths } from "../../services/posts.page";
import PostsListContainer from "../../components/posts/posts.list";

export async function getStaticPaths() {
  return await retrieveStaticPaths();
}

export async function getStaticProps({ params }) {
  return await retrieveStaticProps(parseInt(params.currentPage));
}

export default function Index({ posts, pagination }) {
  return (
    <Container maxWidth="sm">
      <PostsListContainer posts={posts} pagination={pagination} />
    </Container>
  );
}
