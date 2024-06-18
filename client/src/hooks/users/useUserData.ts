import { useQuery } from "@tanstack/react-query";
import api from "@/api/apiClient"; // Ensure the path is correct based on your folder structure

// Function to fetch user data
export function useUserData(userId: string) {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => api.get(`/api/users/user/${userId}`).then((res) => res.data),
  });
}
