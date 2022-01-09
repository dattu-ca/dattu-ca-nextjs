import { createClient } from "contentful";
import { META_TYPES } from "./meta.constants";
import { CATEGORIES, TAGS, ACTIVITIES } from "./content.queries";

const getMetaQuery = (meta) => {
  let c = undefined;
  switch (meta) {
    case META_TYPES.TAGS:
      c = TAGS;
      break;
    case META_TYPES.ACTIVITIES:
      c = ACTIVITIES;
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

export const retrieveMetasList = async (meta) => {
  const query = {
    ...getMetaQuery(meta),
  };

  const res = await client.getEntries(query);
  return processItems(res.items || []);
};
