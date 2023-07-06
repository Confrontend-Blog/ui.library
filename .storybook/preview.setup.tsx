import type { Preview } from "@storybook/react";
import { lightTheme } from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";

console.log(lightTheme);

export const decorators = [
  (Story: () => JSX.Element) => (
    // TODO dark them
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
