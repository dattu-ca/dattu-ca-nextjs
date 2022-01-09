import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { POST_TYPES, POST_PAGES_URLS } from "../../services/constants";
import {
  retrievePostsTotal,
  retrievePostsList,
} from "../../services/posts.services";
import { retrieveWebsiteMetaData } from "../../services/websiteMetadata.services";
import { calculatePaginatedPaths } from "../../services/utils";

import PostBlurb from "../../components/posts/posts.blurb";
import Pagination from "../../components/pagination";

export async function getStaticPaths() {
  const metadata = await retrieveWebsiteMetaData();
  const totalPosts = await retrievePostsTotal(POST_TYPES.POST);
  const paths = calculatePaginatedPaths(totalPosts, metadata.numberOfPostsPerPage);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const metadata = await retrieveWebsiteMetaData();
  const totalPosts = await retrievePostsTotal(POST_TYPES.POST);

  const currentPage = parseInt(params.currentPage);
  const limit = metadata.numberOfPostsPerPage;
  const skip = (currentPage - 1) * limit;

  const posts = await retrievePostsList(POST_TYPES.POST, skip, limit);

  return {
    props: {
      posts: posts,
      pagination: {
        skip: skip,
        limit: limit,
        total: totalPosts,
        urls: POST_PAGES_URLS,
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
