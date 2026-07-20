import { Title } from "../Title/Title.js";
import { Text } from "../Text/Text.js";
import { Button } from "../Button/Button.js";

export function Hero({
  title = "Title of Hero",
  children = "",
  published,
} = {}) {
  return `<section class="hero">
            <article class="card">            
            <div class="card__body">
            ${Title({ level: 1, children: title })}
            ${Text({ variant: "primary", children: children })}
            </div>
            ${Text({ variant: "secondary", children: published })}
            </article>
            ${Button({ variant: "primary", icon: "arrow-narrow-right-dashed.svg", children: "More" })}
          </section>`;
}
