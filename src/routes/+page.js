export const load = async ({ parent }) => {
  const { plates } = await parent();

  return {
    plates,
  };
};
