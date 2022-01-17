import { createClient } from "contentful";
import {ALL_POSTS} from './content.queries';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});


export const retrievePost = async (slug) =>{
    const query = {
      ...ALL_POSTS,
      ["fields.slug"]: slug
    };
    const res = await client.getEntries(query);
    const post = res.items.length > 0 ? res.items[0] : null;
    return post;
  
  
  }