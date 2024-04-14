export interface cartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  quantity: number;
  totalPrice: number;
  category: string;
}

export interface BrandsInterface {
  id: string;
  name: string;
}

export interface PowerBank {
  id: string;
  brandId: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  categoryId: string;
  capacity: number;
  input: string;
  output: string;
  quantity: number;
  totalPrice: number;
  category: string;
}

export interface ChargerInterface {
  id: string;
  brandId: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  categoryId: string;
  output: string;
  type: string;
  quantity: number;
  totalPrice: number;
  category: string;
}

export interface CableInterface {
  id: string;
  brandId: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  categoryId: string;
  output: string;
  cable_length: string;
  type: string;
  quantity: number;
  totalPrice: number;
  category: string;
}

export interface ChargerHeadInterface {
  id: string;
  brandId: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  categoryId: string;
  output: string;
  quantity: number;
  totalPrice: number;
  category: string;
}

export interface CoverInterface {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  categoryId: string;
  quantity: number;
  totalPrice: number;
  category: string;
}

export interface TemperGlassInterface {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  categoryId: string;
  quantity: number;
  totalPrice: number;
  category: string;
}

export interface PhoneInterface {
  id: string;
  brandId: string;
  categoryId: string;
  name: string;
  sim: string;
  size: number;
  memory: string;
  battery: string;
  charging: string;
  usb: string;
  images: string[];
  price: number;
  description: string;
  quantity: number;
  totalPrice: number;
  category: string;
}
