import { loginHandler } from '../src/auth/handler';
import { Request, Response } from 'express';

function mockRequest(body: any): Partial<Request> {
  return { body };
}

function mockResponse(): Partial<Response> {
  const res: Partial<Response> = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}

describe('loginHandler', () => {
  it('should return 400 if email is missing', async () => {
    const req = mockRequest({ password: 'test' }) as Request;
    const res = mockResponse() as Response;
    await loginHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it('should return 401 for invalid credentials', async () => {
    const req = mockRequest({ email: 'wrong@test.com', password: 'wrong' }) as Request;
    const res = mockResponse() as Response;
    await loginHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
  });

  it('should return 200 with token for valid credentials', async () => {
    const req = mockRequest({ email: 'test@example.com', password: 'password123' }) as Request;
    const res = mockResponse() as Response;
    await loginHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      data: expect.objectContaining({ token: expect.any(String) })
    }));
  });
});
