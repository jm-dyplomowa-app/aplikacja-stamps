export interface CouponPrizeObject {
  description: string;
  quantity: number;
}

export interface CouponDTO {
  promoId: string;
  customerId: string;
  code: string;
  realised: boolean;
  id: string;
  type: 'points' | 'prize';
  points?: number;
  prize?: CouponPrizeObject;
}

export interface CouponPoints extends CouponDTO {
  type: 'points';
  points: number;
}

export interface CouponPrize extends CouponDTO {
  type: 'prize';
  prize: CouponPrizeObject;
}
