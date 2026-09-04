export interface Order {
  id: string;
  customerId: string;
  items: OrderItem[];
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  totalAmount: number;
  createdAt: Date;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  unitPrice: number;
}

const orders: Map<string, Order> = new Map();

export class OrderService {
  async createOrder(customerId: string, items: OrderItem[]): Promise<Order> {
    const order: Order = {
      id: `order-${Date.now()}`,
      customerId,
      items,
      status: 'pending',
      totalAmount: items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0),
      createdAt: new Date(),
    };
    orders.set(order.id, order);
    return order;
  }

  async getOrder(orderId: string): Promise<Order | null> {
    return orders.get(orderId) || null;
  }

  async getOrdersByCustomer(customerId: string): Promise<Order[]> {
    const key = customerId.toLowerCase();
    return Array.from(orders.values()).filter(o => o.customerId.toLowerCase() === key);
  }

  async getOrderSummary(customerId: string): Promise<{ count: number; total: number }> {
    const customerOrders = await this.getOrdersByCustomer(customerId);
    return {
      count: customerOrders.length,
      total: customerOrders.reduce((sum, o) => sum + o.totalAmount, 0),
    };
  }
}
