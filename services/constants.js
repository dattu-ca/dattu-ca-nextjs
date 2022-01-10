export const META_TYPES = Object.freeze({
  CATEGORIES: "categories",
  TAGS: "tags",
  ACTIVITIES: "activities",
  PERSON: "person",
  PLACE: "place"
});

export const POST_TYPES = Object.freeze({
  POST: "Post",
  ACTIVITY_POST: "Activity Post",
  ALL: false,
});

export const POST_PAGES_URLS = Object.freeze({
  first: "/",
  pages: "/home/[currentPage]",
  param: "[currentPage]",
});
