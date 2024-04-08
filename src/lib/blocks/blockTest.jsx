import React from "react";

import { ModuleInput } from "../modules";

const BlockTest = React.memo(function ({ pageState, pageStateKey }) {
  const [data, setData] = React.useState(`${pageState[pageStateKey] || ""}`);
  return (
    <>
      {data}
      <ModuleInput
        pageState={pageState}
        pageStateKey={pageStateKey}
        onChange={setData}
      />
    </>
  );
});

export default BlockTest;
