import { Publisher, Subjects, ProductUpdatedEvent } from '@instafood/common';

export class ProductUpdatedPublisher extends Publisher<ProductUpdatedEvent> {
  subject: Subjects.ProductUpdated = Subjects.ProductUpdated;
}
