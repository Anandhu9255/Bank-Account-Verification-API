import { Router } from "express";
import { verifyBankAccount } from "../controllers/bank.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Bank
 *   description: Bank account verification endpoints
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
 *             type: object
 *             properties:
 *               accountNumber:
 *                 type: string
 *                 example: "1234567890"
 *               ifsc:
 *                 type: string
 *                 example: "SBIN0001234"
 *     responses:
 *       200:
 *         description: Account verified successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 verified:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid request
 */
router.post("/verify", verifyBankAccount);

export default router;
