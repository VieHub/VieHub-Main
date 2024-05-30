export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-GB"); // 'en-GB' for DD/MM/YYYY format
};
