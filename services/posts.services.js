import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getTotalPosts = async () => {
  const res = await client.getEntries({
    content_type: "blogPost",
    "fields.postType": "Post",
  });
  return (res.items || []).length;
};

export const getAllPostsForHome = async (skip = 0, limit = 10) => {
  const res = await client.getEntries({
    content_type: "blogPost",
    skip: skip,
    limit: limit,
    order: "-fields.publishDate",
    "fields.postType": "Post",
  });
  return res.items || [];
};
