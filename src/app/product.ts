export interface Product {
	productId: number;

	productCode: string;

	productName: string;

	productType: string;

	productBrand: string;

	productQuantityType: string;

	productRatePerQuantity: number;

	productStockCount: Date;

	productAddDate: Date;

	productAisle: string;

	productShelf: string;

	productDateOfManufacture: Date;

	productDateOfExpiry: Date;

	productImage: string;

	productAvailability: boolean
}
