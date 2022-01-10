import Box from "@mui/material/Box";
import PostBlurb from "./posts.blurb";
import Pagination from "../pagination/pagination.container";

const PostsListContainer = ({ posts, pagination }) => {
  return (
    <Box sx={{ my: 4 }}>
      {posts.map((post) => (
        <PostBlurb post={post} key={post.fields.slug} />
      ))}
      <Pagination {...pagination} />
    </Box>
  );
};

export default PostsListContainer;
