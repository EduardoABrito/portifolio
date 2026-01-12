export const formatPhone = (phone: string) => {
  const digits = phone.toString().replace(/\D/g, "");

  if (digits.length === 13 && digits.startsWith("55")) {
    const country = digits.slice(0, 2);
    const ddd = digits.slice(2, 4);
    const number = digits.slice(4);

    return `+${country} (${ddd}) ${number.slice(0, 5)}-${number.slice(5)}`;
  }

  if (digits.length === 11) {
    const ddd = digits.slice(0, 2);
    const number = digits.slice(2);

    return `(${ddd}) ${number.slice(0, 5)}-${number.slice(5)}`;
  }

  return phone.toString();
};
