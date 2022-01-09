import { createClient } from "contentful";
import { getMetaQuery } from "./content.queries";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const processItems = (items) => {
  const newItems = [];
  items.forEach((item) => {
    const slug = item.fields.slug;
    const isChild = items.filter((item) =>
      item.fields.children?.filter((child) => child.fields.slug === slug).length > 0
    ).length;
    if(!isChild){
        newItems.push(item)
    }
  });
  return newItems;
};

export const getAllMetas = async (meta) => {
  const query = {
    ...getMetaQuery(meta),
  };

  const res = await client.getEntries(query);
  return processItems(res.items || []);
};
