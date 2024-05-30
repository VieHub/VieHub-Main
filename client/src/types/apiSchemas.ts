export interface CreateContestData {
  title: string;
  subTitle: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
  prizeDetails: string;
  maxParticipants: number;
  rules: string;
  requirements: string;
  criteria: string;
  whatToBuild: string;
  agreement: boolean;
  company?: string;
  image_url?: string;
  image_file?: File;  
}

export interface CreateContestDataWithAI {
  title: string;
  subTitle: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
  prizeDetails: string;
  maxParticipants: number;
  rules: string;
  requirements: string;
  criteria: string;
  whatToBuild: string;
  agreement: boolean;
  company?: string;
  image_url: File;
}
