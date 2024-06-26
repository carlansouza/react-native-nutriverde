// src/screens/types.ts
export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    ProductSearchScreen: undefined;
    TabNavigator: undefined;
  };
  
  export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };