export default function functionGetServerOrDemoDataIfDevelopment({
  serverData = {},
  dataDemo,
  pageState,
}) {
  if (process.env.NODE_ENV === "development") {
    serverData = dataDemo;
  }
  pageState.$set("serverData", serverData);
  return serverData;
}
