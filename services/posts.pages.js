import { retrieveWebsiteMetaData } from "./websiteMetadata.services";
import { retrievePostsTotal, retrievePostsList } from "./posts.services";
import { calculatePaginatedPaths } from "./utils";
import { POST_TYPES } from "./constants";

export const retrieveStaticPaths = async () => {
  const metadata = await retrieveWebsiteMetaData();
  const totalPosts = await retrievePostsTotal(POST_TYPES.POST);
  const paths = calculatePaginatedPaths(
    totalPosts,
    metadata.numberOfPostsPerPage
  );
  return {
    paths,
    fallback: false,
  };
};

export const retrieveStaticProps = async (props) => {
  if (props === undefined || props === null) {
    props = { params: { currentPage: 1 } };
  }
  const { params } = props;
  const { currentPage } = params;
  const metadata = await retrieveWebsiteMetaData();
  const totalPosts = await retrievePostsTotal(POST_TYPES.POST);

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
        urls: {
          first: "/",
          pages: "/home/[currentPage]",
          param: "[currentPage]",
        },
      },
    },
  };
};
