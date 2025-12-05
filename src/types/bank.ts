export interface BankVerifyRequest {
  accountNumber: string;
  ifsc: string;
}

export interface BankDetails {
  BANK: string;
  BRANCH: string;
  ADDRESS: string;
  CONTACT: string;
  CITY: string;
  DISTRICT: string;
  STATE: string;
}

export interface VerificationResponse {
  accountNumber: string;
  ifsc: string;
  isValid: boolean;
  accountHolderName: string;
  bank: string;
  verifiedAt: Date;
  bankDetails: BankDetails;
}
