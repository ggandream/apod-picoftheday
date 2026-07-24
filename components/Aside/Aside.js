import { Button } from "../Button/Button.js";
import { Logo } from "../Logo/Logo.js";

export const Aside = ({ title = "", url, explanation, copyright }) => {
  return `<aside class="aside hide">
        <header class="aside__header">
        ${Logo()}
        ${Button({
          variant: "secondary",
          icon: "x",
          children: "Close",
          attributes: { "data-action": "close" },
        })}
        </header>
        <img src="${url}" alt="" class="aside__img" loading="lazy" />
        <h2 class="aside__title">${title}</h2>
        <p class="aside__text">
       ${title}
        </p>
        <p class="aside__text">
        Image Credit & Copyright: ${copyright}
        </p>
        <p class="aside__text">
        ${explanation}
        </p>
      </aside>`;
};
