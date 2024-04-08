import React from "react";

import { stateMain } from "../states";

export default function useWindowSize({ setMaxWidth }) {
  const [size, setSize] = React.useState(stateMain["__tmpSize__"] || 6);
  React.useLayoutEffect(() => {
    function updateWidth() {
      switch (true) {
        default:
        case window.innerWidth >= 1200:
          setSize(6);
          break;
        case window.innerWidth < 1200 && window.innerWidth >= 1080:
          setSize(5);
          break;
        case window.innerWidth < 1080 && window.innerWidth >= 768:
          setSize(4);
          break;
        case window.innerWidth < 768 && window.innerWidth >= 480:
          setSize(3);
          break;
        case window.innerWidth < 480 && window.innerWidth >= 320:
          setSize(2);
          break;
        case window.innerWidth < 320:
          setSize(1);
          break;
      }
    }

    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  React.useEffect(() => {
    if (setMaxWidth) {
      let maxWidth = stateMain["__tmpMaxWidth__"] || 1080;
      switch (size) {
        default:
        case 6:
          maxWidth = 1080;
          break;
        case 5:
          maxWidth = 768;
          break;
        case 4:
          maxWidth = 768;
          break;
        case 3:
          maxWidth = 768;
          break;
        case 2:
          maxWidth = 480;
          break;
        case 1:
          maxWidth = 320;
          break;
      }
      stateMain.$set("__tmpSize__", size);
      stateMain.$set("__tmpMaxWidth__", maxWidth);
      setMaxWidth(maxWidth);
    }
  }, [size, setMaxWidth]);
  return size;
}
