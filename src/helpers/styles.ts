import { initialTheme } from "./initialTheme";
import { IColor, IColors, ITheme } from "./types";

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

export const themedColor = ({ theme: { colors }, color }: IProps) => {
  return color
    ? `color: ${colors[color as keyof typeof initialTheme.colors] || color}`
    : "";
};

export const themedBorderColor = ({
  theme: { colors },
  borderColor,
}: IProps) => {
  return borderColor
    ? `border-color: ${
        colors[borderColor as keyof typeof initialTheme.colors] || borderColor
      }`
    : "";
};

// FIXME: fix typo here
interface IProps {
  theme: IColors;
  borderColor?: IColor | ITheme["colors"];
}
