import { Publisher, Subjects, CategoryCreatedEvent } from '@instafood/common';

export class CategoryCreatedPublisher extends Publisher<CategoryCreatedEvent> {
  subject: Subjects.CategoryCreated = Subjects.CategoryCreated;
}
