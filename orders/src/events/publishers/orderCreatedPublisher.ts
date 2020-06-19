import { Publisher, OrderCreatedEvent, Subjects } from '@instafood/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
