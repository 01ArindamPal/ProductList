import { RouteProp } from '@react-navigation/native';

// Define the structure of a product
export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

// Define the navigation parameters for each screen
export type RootStackParamList = {
  ProductList: undefined; // ProductList screen has no parameters
  ProductDetails: { product: Product }; // ProductDetails expects a 'product' object
};

// Type for the route prop for ProductDetailsScreen (optional, if needed)
export type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;
