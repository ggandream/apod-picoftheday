import { Title } from "../Title/Title.js";
import { Text } from "../Text/Text.js";

export function Hero({ title = "Title of Hero", children = "" } = {}) {
  return `<section class="hero">
            ${Title({ level: 1, children: title })}
            ${Text({ children: title })}
          </section>`;
}
