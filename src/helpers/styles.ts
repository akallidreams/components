import { initialTheme } from "./themeContext";
import { IColors } from "./types";
import { IStyled } from "./types/style";

export const themedBG = ({ theme: { colors }, bg }: IProps) =>
  bg
    ? `background-color: ${colors[bg as keyof typeof initialTheme.colors]}`
    : "";

export const themedFontSize = ({ theme: { fontSizes }, fontSize }: IProps) =>
  fontSize
    ? `font-size: ${
        fontSizes[fontSize as keyof typeof initialTheme.fontSizes]
      }px`
    : "";

export const themedColor = ({ theme: { colors }, color }: IProps) =>
  color ? `color: ${colors[color as keyof typeof initialTheme.colors]}` : "";

interface IProps extends IStyled {
  theme: IColors;
}
