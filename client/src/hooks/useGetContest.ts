// src/hooks/useUserData.ts
import { useQuery } from "@tanstack/react-query";
import api from "@/api/apiClient"; // Ensure the path is correct based on your folder structure

// Example function to fetch user data
export function getContestData() {
  return useQuery({
    queryKey: ["contestData"], // Replace "contestData" with the appropriate query key

    queryFn: () => api.get(`/api/contest/contests`).then((res) => res.data),
  });
}
