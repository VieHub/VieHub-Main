import { useMutation } from "@tanstack/react-query";
import api from "@/api/apiClient"; // Ensure the path is correct based on your folder structure
// import { CreateContestData } from "@/types/apiSchemas"; // Ensure the path is correct based on your folder structure
import { useAuth } from "@/contexts/AuthContext"; // Import the useAuth hook
import { CreateContestData, CreateContestDataWithAI } from "@/types/apiSchemas";
function transformContestData(data: CreateContestData): CreateContestData {
  return {
    title: data.title,
    subTitle: data.subTitle,
    description: data.description,
    type: data.type,
    startDate: new Date(data.startDate).toISOString(), // Ensure date is ISO string
    endDate: new Date(data.endDate).toISOString(), // Ensure date is ISO string
    prizeDetails: data.prizeDetails,
    maxParticipants: data.maxParticipants,
    rules: data.rules,
    requirements: data.requirements,
    criteria: data.criteria,
    whatToBuild: data.whatToBuild,
    agreement: data.agreement,
    company: data.company || "", // Provide empty string if undefined
    image_url: data.image_url,
    image_file: data.image_file, // Assume this is a File object
  };
}

export function useCreateContest() {
  const user = useAuth(); // Use the useAuth hook to access the current user

  return useMutation({
    mutationKey: ["createContest"],

    // Function to perform the actual API call
    mutationFn: async (data: CreateContestData) => {
      // Use FormData to handle content type 'multipart/form-data' required for file upload
      const transformedData = transformContestData(data);

      const contestData: CreateContestData = {
        ...transformedData,
      };

      console.log("CONTEST DATA", contestData);
      const formData = new FormData();
      formData.append("title", contestData.title);
      formData.append("subTitle", contestData.subTitle);
      formData.append("description", contestData.description);
      formData.append("type", contestData.type);
      formData.append("startDate", contestData.startDate);
      formData.append("endDate", contestData.endDate);
      formData.append("prizeDetails", contestData.prizeDetails);
      formData.append(
        "maxParticipants",
        contestData.maxParticipants.toString(),
      );
      formData.append("rules", contestData.rules);
      formData.append("requirements", contestData.requirements);
      formData.append("criteria", contestData.criteria);
      formData.append("whatToBuild", contestData.whatToBuild);
      formData.append("agreement", contestData.agreement.toString()); // Convert agreement to string
      formData.append("host_uid", user?.user?.uid ?? ""); // Add the user's UID to the form data with a default value of ""

      if (contestData.company) {
        formData.append("company", contestData.company);
      }

      // Append either the image URL or the image file, but not both
      if (contestData.image_url) {
        formData.append("image_url", contestData.image_url);
      } else if (contestData.image_file) {
        formData.append("image_file", contestData.image_file);
      }

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

export function useCreateContestWithAI() {
  const user = useAuth(); // Use the useAuth hook to access the current user

  return useMutation({
    mutationKey: ["createContestWithAI"],

    // Function to perform the actual API call
    mutationFn: async (contestData: CreateContestDataWithAI) => {
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
      formData.append("whatToBuild", contestData.whatToBuild);
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
        .post("/api/contest/contest/preview", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data);
    },
  });
}
