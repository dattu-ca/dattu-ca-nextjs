const content_type = "content_type";

export const METADATA = {
  content_type: "websiteMetadata",
};

export const POSTS = {
  content_type: "blogPost",
  "fields.postType": "Post",
  order: "-fields.publishDate",
};

// #region Metas
export const CATEGORIES = {
  content_type: "metaCategory",
  order: "fields.title",
};
export const TAGS = {
  content_type: "metaTag",
  order: "fields.title",
};
export const ACTIVITIES = {
  content_type: "metaActivityType",
  order: "fields.title",
};

export const getMetaQuery = (meta) => {
  let c = undefined;
  switch (meta) {
    case "tags":
      c = TAGS;
      break;
    case "activities":
      c = ACTIVITIES;
      break;
    default:
      c = CATEGORIES;
      break;
  }
  return c;
};
// #endregion
