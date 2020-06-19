import { Message } from 'node-nats-streaming';
import { Listener, OrderCreatedEvent, Subjects } from '@instafood/common';
import { queueGroupName } from './queueGroupName';
import { Product } from '../../models/Product';
import { ProductUpdatedPublisher } from '../publishers/productUpdatedPublisher';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
    // Find the Product that the order is reserving
    const product = await Product.findById(data.product.id);

    // If no Product, throw error
    if (!product) {
      throw new Error('Product not found');
    }

    // Mark the Product as being reserved by setting its orderId property
    product.set({ orderId: data.id });

    // Save the Product
    await product.save();
    await new ProductUpdatedPublisher(this.client).publish({
      id: product.id,
      price: product.price,
      title: product.title,
      userId: product.userId,
      orderId: product.orderId,
      version: product.version,
    });

    // ack the message
    msg.ack();
  }
}
