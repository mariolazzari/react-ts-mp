import { useEffect } from "react";

export const useTimeout = (timerMs: number) => {
  useEffect(
    () => {
      const id = setTimeout(() => {
        console.log("Done!");
      }, timerMs)

      return () => {
        clearInterval(id);
      }
    },
    [timerMs],
  );
};
