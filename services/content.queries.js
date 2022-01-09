const content_type = "content_type";

export const WEBSITE_METADATA = {
  content_type: "websiteMetadata",
};

export const POSTS = {
  content_type: "blogPost",
  "fields.postType": "Post",
  order: "-fields.publishDate",
};

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
