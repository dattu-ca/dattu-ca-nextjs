import { createClient } from "contentful";
import {ALL_POSTS} from './content.queries';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});


export const retrievePostsTotal = async (postType) => {
  const query = {
    ...ALL_POSTS
  };
  if(postType){
    query["fields.postType"] = postType;
  }

  const res = await client.getEntries(query);
  return (res.items || []).length;
};

export const retrievePostsList = async (postType, skip = 0, limit = 10) => {
  const query = {
    ...ALL_POSTS
  };

  if(postType){
    query["fields.postType"] = postType;
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
