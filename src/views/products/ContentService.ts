import LIVELOG_CONTENT from "./data/livelog.json";
import TAK_CONTENT from "./data/tak.json";
import { DownloadOptionsServiceImpl } from "./DownloadOptionsService";
import {
    ProductContentService,
    ProductContentServiceImpl,
} from "./ProductContentService";
import { Content } from "./types/Content";

const TAK_SERVICE_NAME = 'tak';
const LIVELOG_SERVICE_NAME = 'livelog';

const EMPTY_CONTENT_SERVICE : ProductContentService = ProductContentServiceImpl.create('__empty', [] );

const TAK_CONTENT_SERVICE : ProductContentService = ProductContentServiceImpl.create(
    TAK_SERVICE_NAME,
    [
        ...TAK_CONTENT as Content[],
    ]
);

const LIVELOG_CONTENT_SERVICE : ProductContentService = ProductContentServiceImpl.create(
    LIVELOG_SERVICE_NAME,
    [
        ...LIVELOG_CONTENT as Content[],
    ]
);

export const DOWNLOAD_OPTIONS_SERVICE = DownloadOptionsServiceImpl.create();

export class ContentService {

    public static getContentServiceNames () : readonly string[] {
        return [
            TAK_SERVICE_NAME,
            LIVELOG_SERVICE_NAME
        ];
    }

    public static getContentService (name : string) : ProductContentService {
        switch (name) {
            case TAK_SERVICE_NAME: return TAK_CONTENT_SERVICE;
            case LIVELOG_SERVICE_NAME: return LIVELOG_CONTENT_SERVICE;
            default : return EMPTY_CONTENT_SERVICE;
        }
    }

}
