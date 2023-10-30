export function formatPrice(price) {
  const trimmedPrice = price.slice(0, -3);
  return `${trimmedPrice} ₽`;
}

export function formatDiscount(discount) {
  const trimmedDiscount = discount.slice(0, -3);
  return `${trimmedDiscount}%`;
}

export function formatPhoneNumber(phoneNumber) {
  return phoneNumber.replace(/[^\d]/g, "").slice(1);
}
