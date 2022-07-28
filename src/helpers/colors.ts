import { IColors } from "./types";

export const colors = (c: IColors) => ({
  primary: c.primary || "blue",
  secondary: c.secondary || "black",
  grey: c.grey || "grey",
  greyLight: c.greyLight || "#cccccc",
  greyDark: c.greyDark || "#424242",
  white: c.white || "white",
  extra: c.extra || {},
});
