import { createClient } from "contentful";
import {POSTS} from './constants';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});



export const getTotalPosts = async () => {
  const res = await client.getEntries({
    ...POSTS
  });
  return (res.items || []).length;
};

export const getAllPostsForHome = async (skip = 0, limit = 10) => {
  const query = {
    ...POSTS
  };

  if (skip !== null && skip !== undefined) {
    query.skip = skip;
  }
  if (limit !== null && limit !== undefined) {
    query.limit = limit;
  }

  const res = await client.getEntries(query);
  return res.items || [];
};
