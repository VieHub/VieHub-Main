// src/utils/constants.js

// Function to generate user data for a host
export const createHostUserData = (formData: { companyEmail: any; password: any; firstName: any; lastName: any; companyName: any; companyPhone: any; companyAddress: any; industry: any; }) => {
    return {
      email: formData.companyEmail,
      password: formData.password,
      role: "Host",  // Role is determined by the function used
      first_name: formData.firstName,
      last_name: formData.lastName,
      company_name: formData.companyName,
      company_phone: formData.companyPhone,
      company_address: formData.companyAddress,
      industry: formData.industry
    };
  };
  
  // Function to generate user data for a participant
  export const createParticipantUserData = (formData: { email: any; password: any; firstName: any; lastName: any; phone: any; specialization: any; skills: any; }) => {
    return {
      email: formData.email,
      password: formData.password,
      role: "Participant",  // Role is determined by the function used
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone_number: formData.phone,  // Assuming participant form includes phone
      field_of_specialization: formData.specialization,  // Additional fields for participant
      skills: formData.skills
    };
  };
  