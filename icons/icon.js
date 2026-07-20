async function loadIcon(name) {
  console.log(name);
  const response = await fetch(`./icons/${name}.svg`);
  return response.text();
}

export const icons = {
  planet: await loadIcon("planet"),
  calendar: await loadIcon("calendar"),
};
