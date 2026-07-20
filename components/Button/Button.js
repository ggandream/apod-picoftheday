import { icons } from "../../icons/icon.js";

export const Button = ({ variant = "primary", icon, children } = {}) => {
  return `<button type="button" class="btn btn--${variant}" aria-label="More information">
        <span class="btn__text">${children}</span>
        ${icon ? `<span class="btn__icon">${icons[icon] ?? ""}</span>` : ""}
      </button>`;
};
