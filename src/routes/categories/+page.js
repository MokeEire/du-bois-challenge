export const load = async ({ parent }) => {
  const { plates } = await parent();

  // https://dmitripavlutin.com/javascript-array-group/
  const groupByCategory = plates.reduce((group, plate) => {
    const { categories } = plate;
    for (let category of categories) {
      group[category] = group[category] ?? [];
      group[category].push(plate);
    }
    return group;
  }, {});

  const groupedPlates = Object.entries(groupByCategory);

  return {
    groupedPlates,
  };
};
