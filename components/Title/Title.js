export function Title({ level = 1, children = "" } = {}) {
  return `<h${level} class="title">${children}</h${level}>`;
}
