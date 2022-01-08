
import { Paper, Typography } from "@mui/material";

const PostBlurb = ({ post }) => {
  return (
    <Paper component="article">
      <Typography component="h1" variant="h1">{post.fields.title}</Typography>
    </Paper>
  );
};

export default PostBlurb;
