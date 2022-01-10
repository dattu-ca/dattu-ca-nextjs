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

const processItems = (items) => {
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

export const retrieveMetasList = async (meta, includeTotalPosts = true) => {
  const query = {
    ...getMetaQuery(meta),
  };

  const res = await client.getEntries(query);
  const processedItems = processItems(res.items || []);

  if (includeTotalPosts) {
    const posts = await retrievePostsList(POST_TYPES.ALL);
  }

  return processedItems;
};
