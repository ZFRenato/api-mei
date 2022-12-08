import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { logger } from "../../utils/logger";


const auth = (request: Request, response: Response, next: NextFunction): void | Response => {
 const unauthorized = (msg: string): Response => {
    return response.status(401).json({
        status_code: 401,
        error: msg
    });
 };

 if (!request.headers.authorization) {
    return unauthorized('tokenless request');
 }

 const token = request.headers.authorization;
 try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    request.body.user_acess = decoded;
    return next();

 } catch (error) {
    logger.error(error);
    return unauthorized('Acess not Authorization');
 }

}

export {
   auth
}