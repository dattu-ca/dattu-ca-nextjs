import _ from "lodash";
import { createClient } from "contentful";
import { META_TYPES, POST_TYPES, CONTENT_TYPES } from "./constants";
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

const getMetaType = (meta) => {
  let t = undefined;
  switch (meta) {
    case META_TYPES.TAGS:
      t = CONTENT_TYPES.TAG;
      break;
    case META_TYPES.ACTIVITIES:
      t = CONTENT_TYPES.ACTIVITY;
      break;
    case META_TYPES.PERSON:
      t = CONTENT_TYPES.PERSON;
      break;
    case META_TYPES.PLACE:
      t = CONTENT_TYPES.PLACE;
      break;
    default:
      t = CONTENT_TYPES.CATEGORY;
      break;
  }
  return t;
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

const getAllSlugs = (item) => {
  const slugs = [item.fields.slug];
  if (item.fields.children) {
    const childSlugs = item.fields.children.map((child) => getAllSlugs(child));
    return _.uniq(slugs.concat(childSlugs).flat());
  }
  return slugs;
};

const attachSlugs = (item) => {
  const slugs = getAllSlugs(item);
  item.fields.allSlugs = slugs;
  if (item.fields.children) {
    item.fields.children.forEach((child) => attachSlugs(child));
  }
};

const attachPosts = (meta, item, posts) => {
  //numberOfPosts
  console.log(meta);
  console.log(item.fields.allSlugs);
};

const attachNumberOfPosts = (meta, items, posts) => {
  const newItems = _.cloneDeep(items);
  if (posts) {
    const metaType = getMetaType(meta);
    newItems.forEach((item) => {
      attachSlugs(item);
      attachPosts(metaType, item, posts);
    });
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
