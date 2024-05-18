// src/hooks/useCreateContest.ts
import { useMutation } from "@tanstack/react-query";
import api from "@/api/apiClient"; // Ensure the path is correct based on your folder structure
import { CreateContestData } from "@/types/apiSchemas"; // Ensure the path is correct based on your folder structure
import { useAuth } from "@/contexts/AuthContext"; // Import the useAuth hook

// Function to post contest data to backend
export function useCreateContest() {
  const user = useAuth(); // Use the useAuth hook to access the current user

  return useMutation({
    mutationKey: ["createContest"],

    // Function to perform the actual API call
    mutationFn: async (contestData: CreateContestData) => {
      // Use FormData to handle content type 'multipart/form-data' required for file upload
      console.log("CONTEST DATA", contestData);
      const formData = new FormData();
      formData.append("title", contestData.title);
      formData.append("subTitle", contestData.subTitle);
      formData.append("description", contestData.description);
      formData.append("type", contestData.type);
      formData.append(
        "startDate",
        new Date(contestData.startDate).toISOString(),
      );
      formData.append("endDate", new Date(contestData.endDate).toISOString());
      formData.append("prizeDetails", contestData.prizeDetails);
      formData.append(
        "maxParticipants",
        contestData.maxParticipants.toString(),
      );
      formData.append("rules", contestData.rules);
      formData.append("requirements", contestData.requirements);
      formData.append("criteria", contestData.criteria);
      // formData.append("preferences", contestData.preferences);
      // formData.append("terms", contestData.terms);
      formData.append("agreement", contestData.agreement.toString());
      formData.append("host_uid", user?.user?.uid ?? ""); // Add the user's UID to the form data with a default value of ""

      if (contestData.company) {
        formData.append("company", contestData.company);
      }
      formData.append("image_url", contestData.image_url);

      // Log each key and value in FormData
      for (var pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
      // Make the POST request
      return api
        .post("/api/contest/contest/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data);
    },
  });
}
