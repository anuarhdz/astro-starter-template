const getSlug = (str: string, prefix = '') =>
  prefix + str
  .toLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, "")
  .replace(/[\s_-]+/g, "-")
  .replace(/^-+|-+$/g, "");

export default getSlug;