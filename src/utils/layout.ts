// app constants
import { SideBarTypes, LayoutWidth } from "../constants/layout.ts";

interface ConfigTypes {
  leftSideBarType:
    | SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT
    | SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED
    | SideBarTypes.LEFT_SIDEBAR_TYPE_COMPACT;
}

const getLayoutConfigs = (layoutWidth: string | boolean | null) => {
  // add property to change in particular layoutWidth
  let config: ConfigTypes = {
    leftSideBarType: SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT,
  };

  switch (layoutWidth) {
    case LayoutWidth.LAYOUT_WIDTH_FLUID:
      config.leftSideBarType = SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT;
      break;
    case LayoutWidth.LAYOUT_WIDTH_BOXED:
      config.leftSideBarType = SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED;
      break;
    default:
      return config;
  }
  return config;
};

/**
 * Changes the body attribute
 */
const changeBodyAttribute = (attribute: string, value: string): void => {
  if (document.body) document.body.setAttribute(attribute, value);
};

export { getLayoutConfigs, changeBodyAttribute };
