import * as express from 'express'

declare function asyncExpress<T>(
  fn: (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<T>
): (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<T>

export = asyncExpress
