import { Express } from 'express'

type NextFunction = (err?: any) => void | any
declare function asyncExpress<T>(
  fn: (req: Express.Request, res: Express.Response, next: NextFunction) => Promise<T>
): (req: Express.Request, res: Express.Response, next: NextFunction) => Promise<T>

export = asyncExpress
