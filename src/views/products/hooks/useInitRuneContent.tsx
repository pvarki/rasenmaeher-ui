import { useContentInit } from "../../../libs/rune/hooks/useContentInit";
import { loadDefaultRuneContent } from "../../../libs/rune/content";
import { loadCustomizedRuneContent } from "../content";

export function useInitRuneContent() {
  useContentInit(() => {
    loadDefaultRuneContent();
    loadCustomizedRuneContent();
  }, "rune");
}
