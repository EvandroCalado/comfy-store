export interface TypeOrder {
  data: Datum[];
  meta: Meta;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Datum {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  address: string;
  cartItems: CartItem[];
  name: string;
  numItemsInCart: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  orderTotal: number;
  user: User;
}

interface User {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

interface CartItem {
  image: string;
  price: number;
  title: string;
  amount: number;
  cartID: string;
  company: string;
  productID: number;
  productColor: string;
}
