import { useMutation } from "@tanstack/react-query";
import api from "@/api/apiClient"; // Ensure the path is correct based on your folder structure
import { useAuth } from "@/contexts/AuthContext"; // Import the useAuth hook
import { SubmissionSchema } from "@/types/apiSchemas"; // Ensure the path is correct based on your folder structure

export function useSubmitContest(contestId: string) {
  const user = useAuth(); // Use the useAuth hook to access the current user

  return useMutation({
    mutationKey: ["submitContest"],

    // Function to perform the actual API call
    mutationFn: async (data: SubmissionSchema) => {
      // Add the user's UID to the data
      const submissionData: SubmissionSchema = {
        ...data,
        participant_uid: user?.user?.uid ?? "", // Add the user's UID with a default value of ""
      };

      // Log the submission data
      console.log("SUBMISSION DATA", submissionData);

      // Make the POST request
      return api
        .post(`/api/contest/contest/${contestId}/submit`, submissionData)
        .then((res) => res.data);
    },
  });
}
