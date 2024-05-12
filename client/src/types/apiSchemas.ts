interface CreateContestData {
  title: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
  prizeDetails: string;
  maxParticipants: number;
  rules: string;
  criteria: string;
  preferences: string;
  host_uid: string;
  terms: string;
  agreement: boolean;
  company?: string; // Optional company field
  image_url: File; // Assume this is a File object containing the image
}

export type { CreateContestData };
