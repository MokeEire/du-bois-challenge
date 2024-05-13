export const load = async ({ parent, params }) => {
  const { slug } = params;
  const { plates } = await parent();
  const title = slug;
  const filteredPlates = plates.filter((plate) => {
    return plate.categories.includes(slug);
  });

  return {
    plates: filteredPlates,
    title,
  };
};
