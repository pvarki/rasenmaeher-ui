import EN_TAK_CONTENT from "./data/tak-en.json";
import {
    ProductContentService,
    ProductContentServiceImpl,
} from "./ProductContentService";
import { Content } from "./types/Content";

export const CONTENT_SERVICE : ProductContentService = ProductContentServiceImpl.create( EN_TAK_CONTENT as Content[] );

