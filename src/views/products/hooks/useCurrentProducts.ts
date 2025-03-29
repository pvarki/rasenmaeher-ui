import {
    useEffect,
    useState,
} from "react";
import { ContentServiceEvent } from "../ContentService";
import { useContentService } from "./useContentService";

export function useCurrentProducts () : [readonly string[], boolean, boolean] {
    const contentService = useContentService();
    const [products, setProducts] = useState(()=> contentService.getCurrentProducts());
    const [ready, setReady] = useState(()=> contentService.isReady());
    const [errors, setErrors] = useState(()=> contentService.hasError());
    useEffect(() => {
        return contentService.addEventListener(ContentServiceEvent.PRODUCTS_CHANGED, () => {
            setProducts(contentService.getCurrentProducts());
            setReady(contentService.isReady());
            setErrors(contentService.hasError());
        });
    });
    return [products, ready, errors];
}
