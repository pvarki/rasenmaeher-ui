import {
  useEffect,
  useState,
} from "react";
import {
  ContentServiceEvent,
  IContentService,
} from "../ContentService";
import { ProductContentService } from "../ProductContentService";
import { useContentService } from "./useContentService";

export function useProductContentService (
  serviceName: string
) : ProductContentService | undefined {
  const contentService : IContentService = useContentService();

  const [productService, setProductService] = useState<ProductContentService>(
    () => contentService.getProductContentService( serviceName )
  );

  useEffect( () => {
    setProductService( contentService.getProductContentService( serviceName ) );
    return contentService.addEventListener( ContentServiceEvent.PRODUCTS_CHANGED, () => {
      setProductService( contentService.getProductContentService( serviceName ) );
    });
  }, [
    contentService,
    serviceName,
  ]);

  return productService;
}
