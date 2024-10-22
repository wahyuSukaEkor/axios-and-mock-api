import { error } from "console";
import { Request, Response, NextFunction } from "express";

function masukMiddleware(req: Request, res: Response, next: NextFunction){
    try {
        //localhost:8080/user-management/users?user=budi
        const { user } = req.query;
        // if (!user) throw new Error
        if (!user) res.status(400).send("Unathorized");
        console.log("Masuk ke dalam middleware", user);
        next();
    } catch (err) {
        next(err);
    }
}

export default masukMiddleware;