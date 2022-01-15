import { CONTENT_TYPES } from "./constants";

export const WEBSITE_METADATA = Object.freeze({
  content_type: CONTENT_TYPES.WEBSITE_METADATA,
});

export const ALL_POSTS = Object.freeze({
  content_type: CONTENT_TYPES.POST,
  order: "-fields.publishDate",
});

export const CATEGORIES = Object.freeze({
  content_type: CONTENT_TYPES.CATEGORY,
  order: "fields.title",
});
export const TAGS = Object.freeze({
  content_type: CONTENT_TYPES.TAG,
  order: "fields.title",
});

export const ACTIVITIES = Object.freeze({
  content_type: CONTENT_TYPES.ACTIVITY,
  order: "fields.title",
});

export const PLACE = Object.freeze({
  content_type: CONTENT_TYPES.PLACE,
  order: "fields.title",
});

export const PERSON = Object.freeze({
  content_type: CONTENT_TYPES.PERSON,
  order: "fields.title",
});
