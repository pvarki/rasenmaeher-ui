import { ReactElement } from "react";
import { ServiceView } from "./ServiceView";

export interface ProductListProps {
    readonly products : readonly string[];
}

export function ProductList ( props: ProductListProps ) {
    if (!props?.products) return;
    return props?.products.map( (p: string) : ReactElement => {
        return (
            <ServiceView key={`product-${p}`} serviceName={p} viewName={`Service${ p[0].toUpperCase() + p.substring(1) }`} />
        );
    });
}
