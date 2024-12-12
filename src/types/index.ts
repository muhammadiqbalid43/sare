interface Dimension {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string; // ISO date format
  reviewerName: string;
  reviewerEmail: string;
}

interface MetaData {
  createdAt: string; // ISO date format
  updatedAt: string; // ISO date format
  barcode: string;
  qrCode: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimension: Dimension;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: MetaData;
  images: string[];
  thumbnail: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
