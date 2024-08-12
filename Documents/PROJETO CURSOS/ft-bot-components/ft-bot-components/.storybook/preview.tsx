import type { Preview } from "@storybook/react";
import { themes, ensure } from "@storybook/theming";
import React, { useEffect, useState } from "react";
import dark from "../src/styles/themes/Dark";
import Light from "../src/styles/themes/Light";
import { ThemeProvider } from "styled-components";
import { ITheme, ProviderTheme, useTheme } from "../src/components/hooks/theme";
import { Toggle } from "../src/components/Toggle/Toggle";
import { addons } from "@storybook/addons";
import { UPDATE_GLOBALS, STORY_ARGS_UPDATED } from "@storybook/core-events";
import { backgrounds } from "polished";

const theme = JSON.parse(localStorage.getItem("@Atend-Pro:theme") || "{}");
console.log(theme.title, "theme.title");
const newTheme = theme.title === "dark" ? themes.dark : themes.light;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    docs: {
      theme: themes.dark,
    },
  },

  decorators: [
    (Story) => {
      const [theme, setThemes] = useState<ITheme>(dark);
      console.log(theme, "theme");

      const handleChangeTheme = () => {
        console.log("entrou no toggleTheme");
        if (theme !== undefined) {
          const newTheme = theme.title === "dark" ? Light : dark;
          setThemes(newTheme);
          if (newTheme.title === "dark") {
            localStorage.setItem("@Atend-Pro:theme", JSON.stringify(dark));
          } else if (newTheme.title === "light") {
            localStorage.setItem("@Atend-Pro:theme", JSON.stringify(Light));
          }
        }
      };
      return (
        <ProviderTheme theme={theme}>
          <ThemeProvider theme={theme}>
            <Toggle
              onChange={handleChangeTheme}
              // checked={darkTheme.title === "dark"}
            />
            <Story />
          </ThemeProvider>
        </ProviderTheme>
      );
    },
  ],
};
console.log(preview, "preview");
export default preview;
