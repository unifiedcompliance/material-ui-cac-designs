import { createMuiTheme } from "@material-ui/core/styles";
import variants from "./variants";
import typography from "./typography";
import overrides from "./overrides";
import breakpoints from "./breakpoints";
import props from "./props";
import shadows from "./shadows";

const createTheme = ({ currentTheme, toggleSidebar }) => {
  let themeConfig = variants.find((variant) => variant.name === currentTheme);

  if (!themeConfig) {
    console.warn(new Error(`The theme ${currentTheme} is not valid`));
    themeConfig = variants[0];
  }

  return createMuiTheme(
    {
      spacing: 4,
      breakpoints: breakpoints,
      overrides: overrides,
      props: props,
      typography: typography,
      shadows: shadows,
      palette: themeConfig.palette,
    },
    {
      name: themeConfig.name,
      header: themeConfig.header,
      footer: themeConfig.footer,
      sidebar: {
        ...themeConfig.sidebar,
        toggle: toggleSidebar,
      }
    }
  );
};

export default createTheme;
