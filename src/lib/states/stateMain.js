import { stylesTheme } from "../styles";
import { functionState, functionGetSessionStorage } from "../functions";

const stateMain = functionState();

if (typeof window !== "undefined") {
  const theme =
    functionGetSessionStorage("__theme__provider__") !== "dark"
      ? stylesTheme.light
      : stylesTheme.dark;
  stateMain.$set("__theme__provider__", theme);
  if (typeof document !== "undefined")
    document.body.style.background = theme.provider.background;
}

export default stateMain;
