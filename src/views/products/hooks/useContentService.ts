import {
    ContentService,
    IContentService,
} from "../ContentService";

export function useContentService () : IContentService {
    return ContentService.getSingleton();
}
