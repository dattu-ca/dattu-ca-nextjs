import cache from "memory-cache";
import { client } from "./client";
import { WEBSITE_METADATA } from "./content.queries";

export const retrieveWebsiteMetaData = async (bypassCache = false) => {
  const enableCache = process.env.ENABLE_CACHE === 'true';
  const cachedResponse = cache.get(WEBSITE_METADATA);
  if (cachedResponse && !bypassCache && enableCache) {
    return cachedResponse;
  }

  const res = await client.getEntries({...WEBSITE_METADATA});
  if (res.items.length > 0) {
    const data = res.items[0].fields;

    cache.put(WEBSITE_METADATA, data, 24 * 1000 * 60 * 60);

    return data;
  }

  return null;
};
