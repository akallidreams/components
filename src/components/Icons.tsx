import { memo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";
import { initialTheme, types } from "../helpers";
import { useMyTheme } from "../hooks";

interface IProps {
  size?: string | number;
  color?: types.IThemeColor;
}

const iconWrapperStyle: (size?: number | string) => StyleProp<ViewStyle> = (
  size: number | string = "20px"
) =>
  StyleSheet.flatten({
    width: size,
    height: size,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
  });

export const CloseIcon = memo((props: IProps) => {
  const theme = useMyTheme();
  return (
    <View style={iconWrapperStyle(props.size)}>
      <Svg
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 16 16"
        preserveAspectRatio="xMinYMin slice"
      >
        <Path
          d="M1.711.313a.959.959 0 0 0-1.417 0 1.12 1.12 0 0 0 0 1.512L6.082 8 .294 14.175a1.12 1.12 0 0 0 0 1.512.959.959 0 0 0 1.417 0L7.5 9.512l5.789 6.175a.959.959 0 0 0 1.417 0 1.12 1.12 0 0 0 0-1.512L8.918 8l5.788-6.175a1.12 1.12 0 0 0 0-1.512.959.959 0 0 0-1.417 0L7.5 6.488 1.711.313Z"
          fill={
            theme.colors[props.color as keyof typeof initialTheme.colors] ||
            props.color ||
            initialTheme.colors.grey
          }
        />
      </Svg>
    </View>
  );
});

export const BackIcon = memo((props: IProps) => {
  const theme = useMyTheme();
  return (
    <View style={iconWrapperStyle(props.size)}>
      <Svg
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 16 16"
        preserveAspectRatio="xMinYMin slice"
      >
        <Path
          d="m1.547 7 5.265 5.794a.757.757 0 0 1 0 1 .603.603 0 0 1-.91 0L.185 7.498a.77.77 0 0 1 0-.998L5.903.207a.603.603 0 0 1 .909 0 .757.757 0 0 1 0 .998L1.547 7Z"
          fill={
            theme.colors[props.color as keyof typeof initialTheme.colors] ||
            props.color ||
            initialTheme.colors.grey
          }
        />
      </Svg>
    </View>
  );
});
