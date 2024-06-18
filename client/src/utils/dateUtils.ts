import { format } from "date-fns";

export const formatDate = (dateString: string): string => {
  try {
    console.log(dateString);
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy"); // 'dd/MM/yyyy' for DD/MM/YYYY format
  } catch (error) {
    console.error("Error parsing date:", dateString, error);
    return "Invalid Date";
  }
};
