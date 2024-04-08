export default function functionGetSessionStorage(key) {
  return window.sessionStorage.getItem(key) || "";
}
