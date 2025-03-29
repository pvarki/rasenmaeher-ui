import {
  useCallback,
  useEffect,
  useState,
} from "react";
import { ContentServiceEvent } from "../ContentService";
import { ContentType } from "../types/ContentType";
import { ViewContent } from "../types/ViewContent";
import { useContentService } from "./useContentService";
import { useProductContentService } from "./useProductContentService";

export function useContentView (serviceName : string, viewName : string) {
  const contentService = useContentService();
  const productServiceOrNot = useProductContentService(serviceName);
  const [view, setView] = useState<ViewContent>(() => createLoadingView(viewName));

  const getView = useCallback(
    (name : string) => {
        if (!productServiceOrNot) {
          return createProductNotFound(viewName);
        }

        const view = productServiceOrNot.getView( name );
        if ( view ) {
          return view;
        } else {
          return createViewNotFound(viewName);
        }
      },
    [
      productServiceOrNot,
    ]
  );

  const updateView = useCallback(
    () => {
        setView(getView(viewName));
      },
    [
      viewName,
      getView,
      setView
    ]
  );

  // Detect product changes
  useEffect( () => {
    updateView();
    return contentService.addEventListener( ContentServiceEvent.PRODUCTS_CHANGED, () => {
      updateView();
    });
  }, [
    updateView,
    contentService,
  ]);

  return view;
}

function createProductNotFound (viewName: string) : ViewContent {
  return {
    name: viewName,
    type: ContentType.VIEW,
    body: `Product not found: ${viewName}`
  };
}

function createLoadingView (viewName: string) : ViewContent {
  return {
    name: viewName,
    type: ContentType.VIEW,
    body: `Loading: ${viewName}`
  };
}

function createViewNotFound (viewName: string) : ViewContent {
  return {
    name: viewName,
    type: ContentType.VIEW,
    body: `View not found: ${viewName}`
  };
}
