export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
  }
  
  export interface ProductState {
    products: Product[];
  }
  
  export interface User {
    username: string;
    password: string;
    isAdmin: boolean;
  }
  
  export interface UserState {
    user: User | null;
    isAdmin: boolean;
  }