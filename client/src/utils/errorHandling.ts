// src/utils/errorHandling.ts
export function getErrorMessage(errorCode: string): string {
  const errorMap: { [key: string]: string } = {
    "auth/email-already-in-use":
      "This email is already in use. Please use a different email.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/invalid-email": "The email address is invalid.",
    "auth/invalid-credential":
      "The provided credentials are invalid. Please try again.",
    "auth/operation-not-allowed":
      "Operation not allowed. Please contact support.",
    "auth/user-not-found":
      "No user found with this email. Please sign up first.",
    "auth/wrong-password": "The password is incorrect. Please try again.",
    default: "An unexpected error occurred. Please try again.",
  };

  return errorMap[errorCode] || errorMap["default"];
}
