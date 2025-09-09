import { ContentService, IContentService } from "../services/ContentService";

export function useContentService(): IContentService {
  return ContentService.getSingleton();
}
