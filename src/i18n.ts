import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import ChainedBackend from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  ContentService,
  ContentServiceEvent,
} from "./views/products/ContentService";

export const I18N_CONTENT_SERVICE_NS_PREFIX = 'productContent:';

// Create a function to update namespaces and backends
async function updateI18nConfiguration () {

  const products = ContentService.getAllProducts();
  const allProductNamespaces = products.map( name => `${ I18N_CONTENT_SERVICE_NS_PREFIX }${ name }` );
  const missingNamespaces = allProductNamespaces.filter( ns => !i18n.hasLoadedNamespace( ns ) );

  if ( missingNamespaces.length ) {
    await i18n.loadNamespaces( missingNamespaces );
  }

  // Add new namespaces
  missingNamespaces.forEach( ( ns : string ) : void => {
    if ( !i18n.hasResourceBundle( 'en', ns ) ) {
      i18n.addResourceBundle( 'en', ns, {}, true, true );
    }
  } );

}

void i18n
.use( ChainedBackend )
.use( initReactI18next )
.use( LanguageDetector )
.init( {
  fallbackLng : "en",
  detection : {
    order : [ "localStorage", "navigator" ],
    caches : [ "localStorage" ],
  },
  backend : {
    backends : [
      LocalStorageBackend,
      resourcesToBackend( async ( lang : string, namespace : string ) => {
        const serviceName : string | undefined = ContentService.getAllProducts().find( ( name : string ) => {
          return namespace === `${ I18N_CONTENT_SERVICE_NS_PREFIX }${ name }`;
        } );
        if ( serviceName ) {
          return Promise.resolve( ContentService.getContentService( serviceName ).getTranslations( lang ) );
        }

        if ( namespace === "dynamic" ) {
          return import(`./assets/set/locale/${ lang }.json`);
        }
        return import(`./assets/locale/${ lang }.json`);
      } ),
    ],
    backendOptions : [
      {
        expirationTime : import.meta.env.PROD ? (
          7 * 24 * 60 * 60 * 1000 // 7 days in production
        ) : (
          1000                    // one second when not a production
        ),
      },
    ],
  },
  ns : [ "common", "dynamic" ], // Start with basic namespaces
  defaultNS : "common",
  interpolation : {
    escapeValue : false,
  },
  react : {
    transSupportBasicHtmlNodes : true,
    transKeepBasicHtmlNodesFor : [ "br", "strong", "i", "p" ],
  },
} );

// Subscribe to content service changes
ContentService.addEventListener( ContentServiceEvent.PRODUCTS_CHANGED, () => {
  updateI18nConfiguration().catch(err => {
    console.error("Failed to update i18n configuration", err);
  });
} );

// Initial setup with current products
updateI18nConfiguration().catch(err => {
  console.error("Failed to update i18n configuration", err);
});

export default i18n;
