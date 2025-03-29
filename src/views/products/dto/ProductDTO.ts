import { Content } from "../types/Content";

/**
 * Data transfer object for product
 */
export interface ProductDTO {
  readonly callsign: string;
  readonly language: string;
  readonly instructions: string | readonly Content[];
}

/**
 * Type check function for ProductDTO
 * @param obj The object to check
 * @returns True if the object is a valid ProductDTO, false otherwise
 */
export function isProductDTO(obj: unknown): obj is ProductDTO {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'callsign' in obj && typeof obj.callsign === 'string' &&
    'language' in obj && typeof obj.language === 'string' &&
    'instructions' in obj && typeof obj.instructions === 'string'
  );
}
