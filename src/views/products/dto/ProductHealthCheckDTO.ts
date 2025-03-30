/**
 * Data transfer object for product health check
 */
export interface ProductHealthCheckDTO {
  readonly all_ok: boolean;
  readonly products: Record<string, boolean>;
}

/**
 * Type check function for ProductHealthCheckDTO
 * @param obj The object to check
 * @returns True if the object is a valid ProductHealthCheckDTO, false otherwise
 */
export function isProductHealthCheckDTO(obj: unknown): obj is ProductHealthCheckDTO {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'all_ok' in obj && typeof obj.all_ok === 'boolean' &&
    'products' in obj && typeof obj.products === 'object' &&
    obj.products !== null &&
    Object.values(obj.products).every(value => typeof value === 'boolean')
  );
}
