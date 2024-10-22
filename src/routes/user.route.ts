import { Router } from "express";
import {
  DeleteExpenseData,
  EditExpenseData,
  GetAllExpense,
  GetExpenseDetail,
  PostNewData,
} from "../controllers/user.controller";

const router = Router();

//Get All Expense's Data
router.get("/", GetAllExpense);

//Get one Expense's Data by ID
router.get("/:uuid", GetExpenseDetail);

//Post new Expense Data
router.post("/", PostNewData);

//Edit Expense's Data by ID
router.put("/:uuid", EditExpenseData);

//Delete Expense's Data by ID
router.delete("/:uuid", DeleteExpenseData);

export default router;
