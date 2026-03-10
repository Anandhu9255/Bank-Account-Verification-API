# 🏦 Bank Account Verification API

A secure and efficient backend integration for real-time bank account validation. This API ensures that financial details provided by users are accurate and active before initiating transactions, helping to prevent fraud and reduce payment failures.

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [How It Works](#-how-it-works)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [API Documentation](#-api-documentation)
- [Security Implementation](#-security-implementation)

---

## 🌟 Project Overview
In fintech applications, verifying a user's bank account is critical for compliance and operational efficiency. This project provides a standardized interface to verify bank details (Account Number + IFSC) by communicating with verification service providers and returning a structured status report.

## 🔄 How It Works
1. **Request:** The client sends the `account_number` and `ifsc_code` to the API.
2. **External Validation:** The server forwards these details to a secure verification provider (e.g., RazorpayX, Cashfree, or similar).
3. **Response Handling:** The API parses the provider's response to confirm if the account is "Active" and returns the registered "Beneficiary Name" for cross-matching.

## ✨ Key Features
- **Instant Validation:** Real-time checking of bank account status.
- **Beneficiary Name Matching:** Retrieves the name registered with the bank to ensure it matches the user's profile.
- **Error Handling:** Robust logic to handle invalid IFSC codes, closed accounts, or network timeouts.
- **Secure Credentials:** Implementation of environment variables to protect sensitive API keys and secrets.
- **JSON Responses:** Clean, consistent API responses for easy frontend integration.

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **HTTP Client:** Axios (for external API calls)
- **Utilities:** Dotenv (Environment Management), Cors
- **Security:** Helmet.js / Middleware-based validation

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js installed
- Credentials from a Bank Verification Service Provider (e.g., RazorpayX/Cashfree)

### 1. Clone the Repository
```bash
git clone [https://github.com/Anandhu9255/Bank-Account-Verification-API.git](https://github.com/Anandhu9255/Bank-Account-Verification-API.git)
cd Bank-Account-Verification-API

2. Install Dependencies
Bash
npm install
3. Environment Configuration
Create a .env file in the root directory:

Code snippet
PORT=5000
VERIFICATION_PROVIDER_KEY=your_api_key
VERIFICATION_PROVIDER_SECRET=your_api_secret
API_BASE_URL=provider_endpoint_url
4. Run the Server
Bash
# Start in development mode
npm run dev

# Start in production mode
npm start
🚀 API Documentation
Verify Bank Account
Endpoint: POST /api/verify-account

Payload:

JSON
{
  "accountNumber": "1234567890",
  "ifsc": "HDFC0001234"
}
Success Response (200 OK):

JSON
{
  "success": true,
  "data": {
    "status": "active",
    "nameAtBank": "JOHN DOE",
    "message": "Account verified successfully"
  }
}

---

🔒 Security Implementation
Validation Middleware: All incoming requests are sanitized to prevent injection attacks.

Secret Masking: Sensitive provider keys are never exposed to the frontend or logs.

Rate Limiting: (Optional/Recommended) Limits requests to prevent brute-force probing of bank details.
---
📄 License
This project is licensed under the MIT License.
