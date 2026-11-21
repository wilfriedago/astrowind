import { getCollection } from "astro:content";

/** Published projects, ordered by `order` then most recent year. */
export async function getProjects() {
  const projects = await getCollection("projects", ({ data }) => !data.draft);
  return projects.sort(
    (a, b) => a.data.order - b.data.order || b.data.year - a.data.year,
  );
}

export async function getFeaturedProjects(limit = 3) {
  const projects = await getProjects();
  return projects.filter((p) => p.data.featured).slice(0, limit);
}
