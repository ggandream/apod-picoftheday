import { Logo } from "../Logo/Logo.js";
import { DatePicker } from "../DatePicker/DatePicker.js";

export const Nav = () => {
  return `<nav class="nav">${Logo()} ${DatePicker()} </nav>`;
};
