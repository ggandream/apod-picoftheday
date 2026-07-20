export function Text({ variant = "primary", children = "" }) {
  return `<p class="text text--${variant}">${children}</p>`;
}
