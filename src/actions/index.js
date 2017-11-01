import * as types from '../constants/ActionTypes';
import * as demo from './demo';

const toggleBoxedLayout = (isLayoutBoxed) => {
  return { type: types.TOGGLE_BOXED_LAYOUT, isLayoutBoxed };
}
const toggleCollapsedNav = (isNavCollapsed) => {
  return { type: types.TOGGLE_COLLAPSED_NAV, isNavCollapsed };
}
const toggleNavBehind = (isNavBehind) => {
  return { type: types.TOGGLE_NAV_BEHIND, isNavBehind };
}
const toggleFixedHeader = isFixedHeader => {
  return { type: types.TOGGLE_FIXED_HEADER, isFixedHeader };
}
const changeSidebarWidth = (sidebarWidth) => {
  return { type: types.CHANGE_SIDEBAR_WIDTH, sidebarWidth };
}
const changeColorOption = (colorOption) => {
  return { type: types.CHANGE_COLOR_OPTION, colorOption };
}
const changeTheme = (themeOption) => {
  return { type: types.CHANGE_THEME, theme: themeOption };
}

module.exports = {
  toggleBoxedLayout,
  toggleCollapsedNav,
  toggleNavBehind,
  toggleFixedHeader,
  changeSidebarWidth,
  changeColorOption,
  changeTheme,
  demo
}
