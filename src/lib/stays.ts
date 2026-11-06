export const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;
export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-LK").format(price);

export type StaySearch = {
  destination: string;
  checkin: string;
  checkout: string;
  guests: number;
};
export const emptySearch: StaySearch = {
  destination: "",
  checkin: "",
  checkout: "",
  guests: 1,
};
export function localToday() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export function validateDates(
  checkin: string,
  checkout: string,
  today: string,
  required = false,
) {
  if (!checkin && !checkout && !required) return "";
  if (!checkin || !checkout)
    return "Please select both check-in and check-out dates.";
  if (checkin < today) return "Check-in cannot be in the past.";
  if (checkout <= checkin) return "Check-out must be after check-in.";
  return "";
}
