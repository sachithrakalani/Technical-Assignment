export const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;
export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-LK").format(price);
