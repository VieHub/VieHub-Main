// src/hooks/useUserData.ts
import { useQuery } from "@tanstack/react-query";
import api from "@/api/apiClient"; // Ensure the path is correct based on your folder structure

// Example function to fetch user data
export function contestDetailsData(contest_id: string) {
  return useQuery({
    queryKey: ["contestDetailsData", contest_id], // Include uid in the query key for uniqueness
    queryFn: () =>
      api.get(`/api/contest/contests/${contest_id}`).then((res) => res.data),
    // Add error handling or other query options if needed
  });
}
