export const validateAccountNumber = (acc: string): boolean => {
  return /^[0-9]{9,18}$/.test(acc); // 9–18 digits
};

export const validateIFSC = (ifsc: string): boolean => {
  return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc);
};
