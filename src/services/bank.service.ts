import axios from "axios";
import { BankDetails, VerificationResponse } from "../types/bank";

export const getIfscDetails = async (ifsc: string): Promise<BankDetails> => {
  try {
    const response = await axios.get(`https://ifsc.razorpay.com/${ifsc}`);
    return response.data;
  } catch (err) {
    throw new Error("Invalid IFSC code");
  }
};

export const verifyAccount = (
  accountNumber: string,
  ifsc: string,
  bankDetails: BankDetails
): VerificationResponse => {
  
  let accountHolderName = "Demo User";

  const firstDigit = accountNumber[0];

  if (["1", "2", "3"].includes(firstDigit)) accountHolderName = "Demo User";
  if (["4", "5", "6"].includes(firstDigit)) accountHolderName = "John Doe";
  if (["7", "8", "9"].includes(firstDigit)) accountHolderName = "Priya Sharma";

  return {
    accountNumber,
    ifsc,
    isValid: true,
    accountHolderName,
    bank: bankDetails.BANK || "Unknown Bank",
    verifiedAt: new Date(),
    bankDetails
  };
};
