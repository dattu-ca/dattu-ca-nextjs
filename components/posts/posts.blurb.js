
import { Paper, Typography } from "@mui/material";

const PostBlurb = ({ post }) => {
  return (
    <Paper component="article" elevation={3} sx={{mb: 1}}>
      <Typography component="h1" variant="h4">{post.fields.title}</Typography>
    </Paper>
  );
};

export default PostBlurb;
