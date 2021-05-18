export type Role = 'customer' | 'vendor';

export interface UserDTO {
  password: string;
  email: string;
  role: Role;
  promos: string[];
  uid: string;
  coupons?: string[];
  nip?: NIPRegExp;
  storeAddress?: string;
}

export interface CustomerDTO extends UserDTO {
  coupons: string[];
  role: 'customer';
}

const regexp = new RegExp('[0-9]10');
type NIPRegExp = typeof regexp;

export interface VendorDTO extends UserDTO {
  role: 'vendor';
  nip: NIPRegExp;
  storeAddress: string;
}

export type AnyUserDTO = UserDTO | CustomerDTO | VendorDTO;
