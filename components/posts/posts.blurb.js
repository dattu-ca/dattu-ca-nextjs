
import { Paper, Typography } from "@mui/material";
import ReactJson from "react-json-view";

const PostBlurb = ({ post }) => {
  return (
    <Paper component="article">
      <Typography component="h1" variant="h1">{post.fields.title}</Typography>
      <ReactJson src={post}/>
    </Paper>
  );
};

export default PostBlurb;
