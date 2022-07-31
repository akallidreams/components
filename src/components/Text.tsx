import { color, space, typography } from "styled-system";
import styled from "styled-components/native";
import { themedBG, themedColor, themedFontSize } from "../helpers/styles";

export const Text = styled.Text`
  ${color}
  ${space}
  ${typography}
  ${themedColor}
  ${themedFontSize}
  ${themedBG}
`;

export const Bold = styled(Text)`
  font-weight: bold;
`;

export const Italic = styled(Text)`
  font-style: italic;
`;

// TODO: truncate next time
// export const Truncated = () =>

// export default memo(forwardRef(Text));
