const loadIcon = async (name) => {
  const response = await fetch(`icons/${name}.svg`);
  return response.text();
};

export const icons = {};
