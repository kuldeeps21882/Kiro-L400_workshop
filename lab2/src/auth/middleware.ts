import { Request, Response, NextFunction } from 'express';

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ data: null, error: { code: 'UNAUTHORIZED', message: 'Missing or invalid authorization header' } });
    return;
  }

  const token = authHeader.split(' ')[1];

  if (token === 'mock-jwt-token') {
    next();
  } else {
    res.status(401).json({ data: null, error: { code: 'INVALID_TOKEN', message: 'Token is invalid or expired' } });
  }
}
