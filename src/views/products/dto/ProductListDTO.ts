
/**
 * Data transfer object for product list
 */
export interface ProductListItemDTO {
  readonly shortname: string;
  readonly title: string;
  readonly icon: string | null;
  readonly description: string;
  readonly language: string;
}

/**
 * Type check function for ProductListItemDTO
 * @param obj The object to check
 * @returns True if the object is a valid ProductListItemDTO, false otherwise
 */
export function isProductListItemDTO(obj: unknown): obj is ProductListItemDTO {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'shortname' in obj && typeof obj.shortname === 'string' &&
    'title' in obj && typeof obj.title === 'string' &&
    'icon' in obj && (typeof obj.icon === 'string' || obj.icon === null) &&
    'description' in obj && typeof obj.description === 'string' &&
    'language' in obj && typeof obj.language === 'string'
  );
}


/**
 * Data transfer object for product list
 */
export type ProductListDTO = readonly ProductListItemDTO[];

/**
 * Type check function for ProductListDTO
 * @param obj The object to check
 * @returns True if the object is a valid ProductListDTO, false otherwise
 */
export function isProductListDTO(obj: unknown): obj is ProductListDTO {
  return Array.isArray(obj) && obj.every(isProductListItemDTO);
}

