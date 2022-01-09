import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  getTotalPosts,
  getAllPostsForHome,
} from "../../services/posts.services";
import { getWebsiteMetaData } from "../../services/websiteMetadata.services";
import {getPaginationPaths} from "../../services/utils"

import PostBlurb from "../../components/posts/posts.blurb";
import Pagination from "../../components/pagination";

export async function getStaticPaths() {
  const metadata = await getWebsiteMetaData();
  const totalPosts = await getTotalPosts();  
  const paths = getPaginationPaths(totalPosts, metadata.numberOfPostsPerPage);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const metadata = await getWebsiteMetaData();
  const totalPosts = await getTotalPosts();
  
  const currentPage = parseInt(params.currentPage);
  const limit = metadata.numberOfPostsPerPage;
  const skip = (currentPage - 1) * limit;

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
