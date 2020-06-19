import { Subjects, Publisher, PaymentCreatedEvent } from '@instafood/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
