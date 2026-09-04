import { Request, Response } from 'express';
import { OrderService } from './service';

const orderService = new OrderService();

export async function createOrderHandler(req: Request, res: Response): Promise<void> {
  const { customerId, items } = req.body;

  if (!customerId || !items || !Array.isArray(items) || items.length === 0) {
    res.status(400).json({ data: null, error: { code: 'VALIDATION_ERROR', message: 'customerId and items are required' } });
    return;
  }

  const order = await orderService.createOrder(customerId, items);
  res.status(201).json({ data: order, error: null });
}

export async function getOrderHandler(req: Request, res: Response): Promise<void> {
  const { orderId } = req.params;
  const order = await orderService.getOrder(orderId);

  if (!order) {
    res.status(404).json({ data: null, error: { code: 'NOT_FOUND', message: `Order ${orderId} not found` } });
    return;
  }

  res.status(200).json({ data: order, error: null });
}
