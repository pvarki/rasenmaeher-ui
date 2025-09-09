import { useEffect } from "react";

export function useScrollToTop(y: number): void {
  useEffect(() => {
    window.scrollTo(0, y);
  }, [y]);
}
