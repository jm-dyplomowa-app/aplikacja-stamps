export const COUPON_CODE_LENGTH = 8;

export function generateCouponCode(): string {
  const codeCharactersBase =
    'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789_-+!';
  const codeCharacters = codeCharactersBase + codeCharactersBase;

  let couponCode = '';

  for (let i = 0; i < COUPON_CODE_LENGTH; i++) {
    couponCode += codeCharacters.charAt(
      Math.floor(Math.random() * codeCharacters.length)
    );
  }

  return couponCode;
}
