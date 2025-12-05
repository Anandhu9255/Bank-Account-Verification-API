import { Request, Response } from "express";
import { validateAccountNumber, validateIFSC } from "../utils/validateInputs";
import { getIfscDetails, verifyAccount } from "../services/bank.service";

/**
 * @swagger
 * components:
 *   schemas:
 *     BankVerifyRequest:
 *       type: object
 *       required:
 *         - accountNumber
 *         - ifsc
 *       properties:
 *         accountNumber:
 *           type: string
 *           example: "1234567890"
 *         ifsc:
 *           type: string
 *           example: "SBIN0001234"
 *     BankVerifyResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         data:
 *           type: object
 *           properties:
 *             accountNumber:
 *               type: string
 *               example: "1234567890"
 *             ifsc:
 *               type: string
 *               example: "SBIN0001234"
 *             verified:
 *               type: boolean
 *               example: true
 *         message:
 *           type: string
 *           example: "Verification failed"
 */

/**
 * @swagger
 * /api/bank/verify:
 *   post:
 *     summary: Verify a bank account
 *     tags: [Bank]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BankVerifyRequest'
 *     responses:
 *       200:
 *         description: Account verified successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BankVerifyResponse'
 *       400:
 *         description: Invalid request or verification failed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BankVerifyResponse'
 */
export const verifyBankAccount = async (req: Request, res: Response) => {
  try {
    const { accountNumber, ifsc } = req.body;

    if (!accountNumber || !ifsc) {
      return res.status(400).json({
        success: false,
        message: "accountNumber and ifsc are required",
      });
    }

    if (!validateAccountNumber(accountNumber)) {
      return res.status(400).json({
        success: false,
        message: "Invalid account number",
      });
    }

    if (!validateIFSC(ifsc)) {
      return res.status(400).json({
        success: false,
        message: "Invalid IFSC format",
      });
    }

    const ifscDetails = await getIfscDetails(ifsc);
    const result = verifyAccount(accountNumber, ifsc, ifscDetails);

    return res.status(200).json({
      success: true,
      data: result,
    });

  } catch (err: any) {
    return res.status(400).json({
      success: false,
      message: err.message || "Verification failed",
    });
  }
};
