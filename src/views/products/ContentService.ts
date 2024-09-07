import TAK_CONTENT from "./data/tak.json";
import {
    ProductContentService,
    ProductContentServiceImpl,
} from "./ProductContentService";
import { Content } from "./types/Content";

export const CONTENT_SERVICE : ProductContentService = ProductContentServiceImpl.create( TAK_CONTENT as Content[] );
