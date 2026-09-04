import { OrderService } from '../src/orders/service';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    service = new OrderService();
  });

  it('should create an order with correct total', async () => {
    const order = await service.createOrder('customer-1', [
      { productId: 'prod-1', quantity: 2, unitPrice: 10.00 },
      { productId: 'prod-2', quantity: 1, unitPrice: 25.00 },
    ]);
    expect(order.totalAmount).toBe(45.00);
    expect(order.status).toBe('pending');
  });

  it('should retrieve an order by ID', async () => {
    const created = await service.createOrder('customer-1', [
      { productId: 'prod-1', quantity: 1, unitPrice: 10.00 },
    ]);
    const retrieved = await service.getOrder(created.id);
    expect(retrieved).toEqual(created);
  });

  it('should return null for non-existent order', async () => {
    const result = await service.getOrder('non-existent-id');
    expect(result).toBeNull();
  });

  it('should handle null customerId', async () => {
    const summary = await service.getOrderSummary(null as unknown as string);
    expect(summary).toEqual({ count: 0, total: 0 });
  });
});
