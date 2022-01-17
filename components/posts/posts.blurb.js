import { Paper, Typography } from "@mui/material";
import Link from "../../src/Link";

const PostBlurb = ({ post }) => {
  return (
    <Paper component="article" elevation={3} sx={{mb: 1}}>
      <Typography component="h1" variant="h4">{post.fields.title}</Typography>
      <Link href={`/post/${post.fields.slug}`}>Details</Link>
      <pre>{JSON.stringify(post.fields.postType)}</pre>
    </Paper>
  );
};

export default PostBlurb;
