import { createClient } from "contentful";
import { getMetaQuery } from "./content.queries";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getAllMetas = async (meta) => {
  const query = {
    ...getMetaQuery(meta),
  };

  const res = await client.getEntries(query);
  return res.items || [];
};
