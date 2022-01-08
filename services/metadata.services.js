import cache from "memory-cache";
import { client } from "./client";
import { METADATA } from "./content.queries";

export const getMetaData = async (bypassCache = false) => {
  const cachedResponse = cache.get(METADATA);
  if (cachedResponse && !bypassCache) {
    return cachedResponse;
  }

  const res = await client.getEntries({...METADATA});
  if (res.items.length > 0) {
    const data = res.items[0].fields;

    cache.put(METADATA, data, 24 * 1000 * 60 * 60);

    return data;
  }

  return null;
};
