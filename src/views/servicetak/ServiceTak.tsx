import { ProductContentRenderer } from "./ProductContentRenderer";
import {
    ProductContentService,
    ProductContentServiceImpl,
} from "./ProductContentService";
import { Content } from "./types/Content";
import EN_TAK_CONTENT from "./data/tak-en.json";

const CONTENT_SERVICE : ProductContentService = ProductContentServiceImpl.create( EN_TAK_CONTENT as Content[] );

export function ServiceTak () {

    // const navigate = useNavigate();
    // const { i18n } = useTranslation();
    // const productData : ProductData = useProductData( i18n.language );

    // const { openDownloadModal, loading } = useDownloadModal( {
    //     downloadTitle : productData.downloadTitle,
    //     downloadItemTitle : productData.downloadItemTitle,
    //     downloadButtonTitle : productData.downloadButtonTitle,
    //     downloadSuccessTitle : productData.downloadSuccessTitle,
    //     downloadSuccessDescription : productData.downloadSuccessDescription,
    //     downloadErrorTitle : productData.downloadErrorTitle,
    //     downloadErrorDescription : productData.downloadErrorDescription,
    // } );

    // if ( loading ) {
    //     return <LoadingComponent text={ productData.iAmDownloading } />;
    // }

    // const handleDownloadButtonClick = () => {
    //     (openDownloadModal as () => void)();
    // };

    const view = CONTENT_SERVICE.getView( 'ServiceTak' );
    if ( !view ) {
        console.warn( `Warning! Could not find view named ServiceTak` );
    }
    return ProductContentRenderer.render( view );

    // return (
    //   <div>
    //     <CardsContainer>
    //       <FoldableCard
    //           title={productData.foldableCardTitle}
    //           imageSrc={productData.foldableCardImage}>
    //
    //         <div className="flex flex-col items-center justify-center p-5">
    //
    //           <ServiceInfoCard
    //             title={productData.serviceInfoCardTitle}
    //             image={productData.serviceInfoCardImage}
    //           />
    //
    //           <UnfoldableCard
    //             title={productData.unfoldableCardTitle}
    //             steps={[
    //               {
    //                 description: (
    //                   <Trans
    //                     i18nKey={ productData.unfoldableCardStep1Description }
    //                     components={{ strong: <strong /> }}
    //                   />
    //                 ),
    //               },
    //               {
    //                 description: (
    //                   <Trans
    //                     i18nKey={ productData.unfoldableCardStep2Description }
    //                     components={{ strong: <strong /> }}
    //                   />
    //                 ),
    //               },
    //               {
    //                 description: (
    //                   <Trans
    //                     i18nKey={ productData.unfoldableCardStep3Description }
    //                     components={{ strong: <strong /> }}
    //                   />
    //                 ),
    //               },
    //             ]}
    //           />
    //
    //           <ServiceProductUsageCard
    //             title={productData.usageCardTitle}
    //             content={productData.usageCardContent}
    //           />
    //
    //           <div className="flex flex-col items-center justify-center px-0 w-full">
    //
    //             <div className="flex w-full items-center justify-center items-stretch px-0">
    //
    //               <div className="flex-1 px-0">
    //                 <div className="w-full">
    //                   <Button
    //                     variant={{ width: "full" }}
    //                     onClick={() => navigate("/app/services/tak/quickstart")}
    //                     styling="m-1 w-full min-h-[4rem]"
    //                   >
    //                     <div className="flex items-center justify-center w-full h-full">
    //                       <img src={phone} alt="keys" className="h-5 w-5 mr-2" />
    //                       {productData.guideButtonQuickStart}
    //                     </div>
    //                   </Button>
    //                 </div>
    //               </div>
    //
    //               <div className="p-1" />
    //
    //               <div className="flex-1 px-0">
    //                 <div className="w-full">
    //                   <Button
    //                     variant={{ width: "full" }}
    //                     onClick={() => navigate("/app/services/tak/usage")}
    //                     styling="m-1 px-2 w-full min-h-[4rem]"
    //                   >
    //                     <div className="flex items-center justify-center w-full h-full">
    //                       <img src={usage} alt="keys" className="h-5 w-5 mr-2" />
    //                       {productData.guideButtonUsage}
    //                     </div>
    //                   </Button>
    //                 </div>
    //               </div>
    //
    //               <div className="p-1" />
    //
    //             </div>
    //
    //             <Button
    //               variant={{ width: "full" }}
    //               onClick={handleDownloadButtonClick}
    //               styling="m-1 px-3 bg-success text-white w-full"
    //             >{productData.grabZipButton}</Button>
    //
    //           </div>
    //
    //         </div>
    //
    //       </FoldableCard>
    //
    //     </CardsContainer>
    //   </div>
    // );
}
