import _ from "lodash";
import { createClient } from "contentful";
import { META_TYPES, POST_TYPES } from "./constants";
import { CATEGORIES, TAGS, ACTIVITIES, PLACE, PERSON } from "./content.queries";

import { retrievePostsList } from "./posts.services";

const getMetaQuery = (meta) => {
  let c = undefined;
  switch (meta) {
    case META_TYPES.TAGS:
      c = TAGS;
      break;
    case META_TYPES.ACTIVITIES:
      c = ACTIVITIES;
      break;
    case META_TYPES.PERSON:
      c = PERSON;
      break;
    case META_TYPES.PLACE:
      c = PLACE;
      break;
    default:
      c = CATEGORIES;
      break;
  }
  return c;
};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const familyfyItems = (items) => {
  const newItems = [];
  items.forEach((item) => {
    const slug = item.fields.slug;
    const isChild = items.filter(
      (item) =>
        item.fields.children?.filter((child) => child.fields.slug === slug)
          .length > 0
    ).length;
    if (!isChild) {
      newItems.push(item);
    }
  });
  return newItems;
};

const attachNumberOfPosts = (meta, items, posts) => {
  const newItems = _.cloneDeep(items);
  if (posts) {
    
    console.log(posts);
    console.log(meta);
  }

  return newItems;
};

export const retrieveMetasList = async (meta, includeTotalPosts = true) => {
  const query = {
    ...getMetaQuery(meta),
  };

  const res = await client.getEntries(query);
  const posts = includeTotalPosts
    ? await retrievePostsList(POST_TYPES.ALL)
    : false;
  const familiyfiedItems = familyfyItems(res.items || []);

  const processedItems = attachNumberOfPosts(meta, familiyfiedItems, posts);

  return processedItems;
};
