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

function createLoadingView (viewName: string) : ViewContent {
  return createCardView(viewName, `Loading: ${viewName}`, "Please wait while we load the content.");
}

function createProductNotFound (viewName: string) : ViewContent {
  return createCardView(viewName, `${viewName}`, "The product you are looking for could not be found. Please try again later.");
}

function createViewNotFound (viewName: string) : ViewContent {
  return createCardView(viewName, `${viewName}`, "The product you are looking for could not be found. Please try again later.");
}

function createCardView (
  viewName: string,
  title: string,
  message: string,
) : ViewContent {
  return {
    name: viewName,
    type: ContentType.VIEW,
    body: [
      {
        type: ContentType.DIV,
        classes: [
          "cards-container",
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
          "mx-2",
          "h-[calc(100vh",
          "-",
          "4rem)]",
          "md:px-[20%]",
          "lg:px-[32%]",
        ],
        body: [
          {
            type: ContentType.DIV,
            classes: [
              "flex",
              "flex-col",
              "items-center",
              "justify-center",
              "bg-backgroundLight",
              "rounded-lg",
              "w-full",
              "max-w-full",
              "mb-5",
              "overflow-hidden",
              "prose",
              "prose-white",
            ],
            body: [
              {
                type: ContentType.DIV,
                classes: [
                  "flex",
                  "flex-col",
                  "items-center",
                  "justify-center",
                  "bg-backgroundLight",
                  "rounded-lg",
                  "w-full",
                  "max-w-full",
                  "mb-5",
                  "overflow-hidden",
                  "prose",
                  "prose-white",
                ],
                body: [
                  {
                    type: ContentType.H3,
                    classes: [
                      "text-xl",
                      "font-bold",
                      "mt-1",
                      "mb-1"
                    ],
                    body: title,
                  },
                  {
                    type: ContentType.P,
                    classes: [
                      "text-center",
                      "ml-2",
                      "mr-2",
                    ],
                    body: message
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
}
