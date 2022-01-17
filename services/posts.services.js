import { createClient } from "contentful";
import {ALL_POSTS} from './content.queries';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});


export const retrievePostsTotal = async (postVisibility) => {
  const query = {
    ...ALL_POSTS
  };
  if(postVisibility){
    query["fields.contentVisibility"] = postVisibility;
  }

  const res = await client.getEntries(query);
  return (res.items || []).length;
};

export const retrievePostsList = async (postVisibility, skip, limit) => {
  const query = {
    ...ALL_POSTS
  };

  if(postVisibility){
    query["fields.contentVisibility"] = postVisibility;
  }
  if (skip !== null && skip !== undefined) {
    query.skip = skip;
  }
  if (limit !== null && limit !== undefined) {
    query.limit = limit;
  }

  const res = await client.getEntries(query);
  return res.items || [];
};