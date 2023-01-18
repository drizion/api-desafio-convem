import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Content-Type", "application/json");
  next();
}