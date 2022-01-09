export const WEBSITE_METADATA = Object.freeze({
  content_type: "websiteMetadata",
});

export const ALL_POSTS = Object.freeze({
  content_type: "blogPost",
  order: "-fields.publishDate",
});

export const CATEGORIES = Object.freeze({
  content_type: "metaCategory",
  order: "fields.title",
});
export const TAGS = Object.freeze({
  content_type: "metaTag",
  order: "fields.title",
});

export const ACTIVITIES = Object.freeze({
  content_type: "metaActivityType",
  order: "fields.title",
});
