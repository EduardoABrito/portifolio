import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDateBirthday = (date: Date | string) => {
  if (typeof date === "string") {
    const [year, month, day] = date.split("-").map(Number);

    return format(new Date(year, month - 1, day), "d 'de' MMMM 'de' yyyy", {
      locale: ptBR,
    });
  }

  return format(date, "d 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });
};
