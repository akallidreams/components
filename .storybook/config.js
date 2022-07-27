// if you use expo remove this line
import { AppRegistry } from "react-native";

import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
// import { withKnobs } from '@storybook/addon-knobs';

// import "./rn-addons";

// enables knobs for all stories
// addDecorator(withKnobs);

// import stories
configure(() => {
  require("./stories/index.js");
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
