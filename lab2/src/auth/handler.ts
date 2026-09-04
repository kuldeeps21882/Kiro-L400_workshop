import { Request, Response } from 'express';

interface AuthRequest {
  email: string;
  password: string;
}

export async function loginHandler(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body as AuthRequest;

  if (!email || !password) {
    res.status(400).json({ data: null, error: { code: 'VALIDATION_ERROR', message: 'Email and password are required' } });
    return;
  }

  if (email === 'test@example.com' && password === 'password123') {
    res.status(200).json({ data: { token: 'mock-jwt-token', expiresIn: 3600 }, error: null });
  } else {
    res.status(401).json({ data: null, error: { code: 'INVALID_CREDENTIALS', message: 'Invalid email or password' } });
  }
}
