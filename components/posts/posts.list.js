import Box from "@mui/material/Box";
import PostBlurb from "./posts.blurb";
import Pagination from "../pagination";

const PostsList = ({ posts, pagination }) => {
  return (
    <Box sx={{ my: 4 }}>
      {posts.map((post) => (
        <PostBlurb post={post} key={post.fields.slug} />
      ))}
      <Pagination {...pagination} />
    </Box>
  );
};

export default PostsList;
