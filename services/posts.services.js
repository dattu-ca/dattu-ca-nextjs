import { createClient } from "contentful";
import {POSTS} from './content.queries';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});


export const retrievePostsTotal = async (postType) => {
  const query = {
    ...POSTS
  };
  if(postType){
    query["fields.postType"] = postType;
  }

  const res = await client.getEntries(query);
  return (res.items || []).length;
};

export const retrievePostsList = async (postType, skip = 0, limit = 10) => {
  const query = {
    ...POSTS
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
