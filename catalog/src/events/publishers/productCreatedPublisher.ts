import { Publisher, Subjects, ProductCreatedEvent } from '@instafood/common';

export class ProductCreatedPublisher extends Publisher<ProductCreatedEvent> {
  subject: Subjects.ProductCreated = Subjects.ProductCreated;
}
