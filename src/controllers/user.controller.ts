import { Request, Response, NextFunction } from "express";
import { MOCK_API_URL } from "../config/envConfig";
import axios from "axios";

//Controller Get All Data & Filter Category
async function GetAllExpense(req: Request, res: Response, next: NextFunction) {
  try {
    const { category } = req.query;
    let mockAPIUrl = MOCK_API_URL;
    if (category) {
    mockAPIUrl = `${MOCK_API_URL}/expense?category=${category}`;
    } else {
      mockAPIUrl = `${MOCK_API_URL}/expense`;  
    }
    const { data } = await axios.get(`${mockAPIUrl}`);
    res.status(200).send({
      message: "Get Expense success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

//Controller Get one Data by ID
async function GetExpenseDetail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { uuid } = req.params;
    const { data } = await axios.get(`${MOCK_API_URL}/expense/${uuid}`);
    res.status(200).send({
      message: "Get Expense from one data success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

//Controller Put New Data
async function PostNewData(req: Request, res: Response, next: NextFunction) {
  try {
    const contoh = {
      title: "New Data by BE",
      nominal: 82000,
      type: "Post",
      category: "New",
      date: 5000,
    };

    const { data } = await axios.post(`${MOCK_API_URL}/expense`, contoh);
    res.status(200).send({
      message: "Create Expense success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

//Controller Edit one data
async function EditExpenseData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const contoh = {
      title: "Edited Data by BE",
      nominal: 82000,
      type: "Edit",
      category: "new edited",
      date: 5000,
    };
    const { uuid } = req.params;
    const { data } = await axios.put(`${MOCK_API_URL}/expense/${uuid}`, contoh);
    res.status(200).send({
      message: `Data on Expense's ID ${uuid} success edited`,
      data,
    });
  } catch (err) {
    next(err);
  }
}

//Controller Delete one data
async function DeleteExpenseData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { uuid } = req.params;
    const { data } = await axios.delete(`${MOCK_API_URL}/expense/${uuid}`);
    res.status(200).send({
      message: `Expense Data on ID ${uuid} has been deleted`,
      data,
    });
  } catch (err) {
    next(err);
  }
}

export {
  GetAllExpense,
  GetExpenseDetail,
  PostNewData,
  EditExpenseData,
  DeleteExpenseData,
};
