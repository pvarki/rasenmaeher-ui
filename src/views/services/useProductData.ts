import tak from "../../assets/icons/taklogo.png";
import { ProductData } from "./ProductData";

export function useProductData (language: string) : ProductData {
    return language.startsWith("en") ? {

        usageCardTitle: "Purpose",
        usageCardContent: "<ul><li>Real-time tracking of friendlies <em>(GPS).</em></li><li>Send observations to the command post (HQ) for interpretation.</li><li>Follow the <strong>Recon Feed</strong> that your command post (HQ) creates for your unit.</li></ul>",

        usageViewNavbarTitle: "TAK: Usage",

        downloadTitle: "Download Your Client Package",
        downloadItemTitle: "TAK Client Package",
        downloadButtonTitle: "Download Client Package",
        downloadSuccessTitle: "Client Package Downloaded.",
        downloadSuccessDescription: "Your Client Package has been downloaded. Please install it to your application, according to the Quickstart Guide.",
        downloadErrorTitle: "Error in Downloading Client Package:",
        downloadErrorDescription: "Downloading your Client Package failed. Please try again later.",

        iAmDownloading: "Fetching your package...",

        foldableCardTitle: "TAK",
        foldableCardImage: tak,

        serviceInfoCardTitle: "TAK Situational Awareness Application",
        serviceInfoCardImage: tak,

        unfoldableCardTitle: "How to get started",
        unfoldableCardStep1Description: "<strong>Quickstart Guide</strong> tells you how to start using TAK on your device.",
        unfoldableCardStep2Description: "The <strong>Usage Guide</strong> tells you how to use the application, according to our standard model.",
        unfoldableCardStep3Description: "Download the <strong>Client Package</strong> and install it to your TAK device according to the Quickstart Guide, to get using the app.",

        guideButtonQuickStart: "Quickstart",
        guideButtonUsage: "Usage Guide",

        grabZipButton: "Download your Client Package",

    } : {

        usageCardTitle: "Käyttötarkoitus lyhyesti",
        usageCardContent: "<ul><li>Käyttäjiesi seuranta reaaliajassa <em>(GPS).</em></li><li>Lähetä havaintoja komentopaikalle. (HQ) tulkittavaksi</li><li>Seuraa <strong>Recon Feediä</strong>, mitä komentopaikka (HQ) muodostaa joukollesi.</li></ul>",

        usageViewNavbarTitle: "TAK: Käyttö joukossa",

        downloadTitle: "Lataa viestiperustepakettisi",
        downloadItemTitle: "viestiperustepakettiasi",
        downloadButtonTitle: "Lataa viestiperustepaketti",
        downloadSuccessTitle: "Viestiperustepaketti ladattu.",
        downloadSuccessDescription: "Viestiperustepaketti ladattu. Lataa paketti sovellukseen käyttöönotto-ohjeiden mukaisesti.",
        downloadErrorTitle: "Virhe viestiperustepaketin lataamisessa:",
        downloadErrorDescription: "Viestiperustepaketin lataaminen epäonnistui. Yritä myöhemmin uudelleen.",

        iAmDownloading: "Hankin perustepakettiasi...",

        foldableCardTitle: "TAK",
        foldableCardImage: tak,

        serviceInfoCardTitle: "Tilannekuvasovellus TAK",
        serviceInfoCardImage: tak,

        unfoldableCardTitle: "Näin otat käyttöön",
        unfoldableCardStep1Description: "<strong>Quickstart Guide</strong> tells you how to start using TAK on your device.",
        unfoldableCardStep2Description: "The <strong>Usage Guide</strong> tells you how to use the application, according to our standard model.",
        unfoldableCardStep3Description: "Download the <strong>Client Package</strong> and install it to your TAK device according to the Quickstart Guide, to get using the app.",

        guideButtonQuickStart: "Käyttöönotto",
        guideButtonUsage: "Käyttö joukossa",

        grabZipButton: "Lataa viestiperustepaketti",

    };
}
