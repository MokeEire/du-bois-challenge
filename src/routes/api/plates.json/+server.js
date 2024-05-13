export const GET = async ({ url }) => {
  const modules = import.meta.glob("../../plates/*/*.{md,svx,svelte.md}");
  const platePromises = [];
  const limit = Number(url.searchParams.get("limit") ?? Infinity);

  if (Number.isNaN(limit)) {
    return {
      status: 400,
    };
  }

  for (let [path, resolver] of Object.entries(modules)) {
    const slug = path.replace("../../plates/", "").replace("/+page.md", "");

    const promise = resolver().then((plate) => ({
      slug,
      ...plate.metadata,
    }));

    platePromises.push(promise);
  }

  const plates = await Promise.all(platePromises);
  const publishedPlates = plates
    .filter((plate) => plate.published !== false)
    .slice(0, limit);

    publishedPlates.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
  const data = publishedPlates.slice(0, limit);
  return new Response(JSON.stringify(data));
};
