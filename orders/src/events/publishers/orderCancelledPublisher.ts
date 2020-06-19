import { Subjects, Publisher, OrderCancelledEvent } from '@instafood/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
