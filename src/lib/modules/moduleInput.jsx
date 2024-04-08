import React from "react";

const ModuleInput = React.memo(function ({
  pageState,
  pageStateKey,
  type,
  value,
  onChange,
}) {
  const checkState = React.useMemo(
    () => pageState && pageStateKey,
    [pageState, pageStateKey],
  );

  const [inputData, setInputData] = React.useState(
    `${(checkState && pageState[pageStateKey]) || value || ""}`,
  );
  const [inputTimeout, setInputTimeout] = React.useState(0);

  const inputChange = React.useCallback(() => {
    if (checkState) pageState.$set(pageStateKey, inputData);
    if (onChange) onChange(inputData);
  }, [checkState, pageState, pageStateKey, onChange, inputData]);

  React.useEffect(() => {
    if (checkState) {
      setInputTimeout(setTimeout(inputChange, 1000));
    }
  }, [inputData, inputChange, checkState]);

  return (
    <input
      type={type || "text"}
      value={inputData}
      onInput={({ target: { value } }) => {
        clearTimeout(inputTimeout);
        setInputData(value);
      }}
    />
  );
});

export default ModuleInput;
