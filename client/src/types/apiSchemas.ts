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
export interface SubmissionContestData {
  teamemail: string;
  linkedin: string;
  github: string;
  youtube: string;
  agreement: boolean;
  image_url: File;
}

// SubmissionSchema TypeScript interface
export interface SubmissionSchema {
  participant_uid: string;
  submission_link: string;
  description?: string;
  teammates?: string;
  teammates_emails?: EmailStr[];
  linkedin?: string;
  github?: string;
  youtube_video_link?: string;
  agree_to_rules: boolean;
}

// You can also define the types for Url and EmailStr if you don't have specific packages

type EmailStr = string;
