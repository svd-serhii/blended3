import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    to: "/",
    text: "Home",
  },
  {
    id: nanoid(),
    to: "/converter",
    text: "Converter",
  },
];

export default items;
