import { stateMain } from "../states";
import { functionSetSessionStorage } from ".";

export default function functionChangeTheme({ theme, light, dark, setTheme }) {
  const checkTheme = theme === light;
  const newDataTheme = checkTheme ? dark : light;
  setTheme((theme) => (theme === light ? dark : light));
  stateMain.$set("__theme__provider__", newDataTheme);
  document.body.style.background = newDataTheme.provider.background;
  functionSetSessionStorage(
    "__theme__provider__",
    checkTheme ? "dark" : "light",
  );
}
