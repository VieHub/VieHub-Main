// src/hooks/useUserData.ts
import { useQuery } from "@tanstack/react-query";
import api from "@/api/apiClient"; // Ensure the path is correct based on your folder structure

// Function to fetch private contest details
export function usePrivateContestDetails(contest_id: string, key: string) {
  return useQuery({
    queryKey: ["privateContestDetails", contest_id, key], // Include contest_id and key in the query key for uniqueness
    queryFn: () =>
      api
        .post(`/api/private-contest/access`, { contest_id, key })
        .then((res) => res.data),
    // Add error handling or other query options if needed
  });
}
